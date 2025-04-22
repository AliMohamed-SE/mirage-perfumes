// src/contexts/AuthContext.tsx
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  User,
  Session,
  AuthError,
  Provider,
  UserAttributes,
} from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Define types for our context
type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signUp: (
    email: string,
    password: string,
    fullName?: string
  ) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  signInWithMagicLink: (
    email: string
  ) => Promise<{ data?: any; success?: boolean; error?: AuthError }>;
  signInWithProvider: (
    provider: Provider
  ) => Promise<{ data?: any; error?: AuthError }>;
  signOut: () => Promise<void>;
  resetPassword: (
    email: string
  ) => Promise<{ data?: any; success?: boolean; error?: AuthError }>;
  updatePassword: (
    newPassword: string
  ) => Promise<{ data?: any; success?: boolean; error?: AuthError }>;
  updateProfile: (
    updates: UserAttributes
  ) => Promise<{ data?: any; success?: boolean; error?: AuthError }>;
  getUserProfile: () => Promise<{
    data?: any;
    success?: boolean;
    error?: AuthError;
  }>;
  isAuthenticated: boolean;
};

// Create a context with an undefined default value
// We'll use a separate function to enforce using the context within a provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check active session and set user when the component mounts
    const checkUser = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          setUser(session.user);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Sign up with email and password
  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });

      if (error) throw error;

      toast.success(
        "Signup successful. Check your email to verify your account"
      );
      return true;
    } catch (error) {
      setError((error as AuthError).message);
      toast.error(error.message || "Signup failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      setError((error as AuthError).message);
      toast.error("Invalid credentials");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with magic link
  const signInWithMagicLink = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      return { data, success: true };
    } catch (error) {
      setError((error as AuthError).message);
      return { error: error as AuthError };
    } finally {
      setLoading(false);
    }
  };

  // Sign in with third-party provider
  const signInWithProvider = async (provider: Provider) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      return { data };
    } catch (error) {
      setError((error as AuthError).message);
      return { error: error as AuthError };
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      setError((error as AuthError).message);
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;

      return { data, success: true };
    } catch (error) {
      setError((error as AuthError).message);
      return { error: error as AuthError };
    } finally {
      setLoading(false);
    }
  };

  // Update password
  const updatePassword = async (newPassword: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      return { data, success: true };
    } catch (error) {
      setError((error as AuthError).message);
      return { error: error as AuthError };
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (updates: UserAttributes) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.updateUser(updates);

      if (error) throw error;

      setUser(data.user);
      return { data, success: true };
    } catch (error) {
      setError((error as AuthError).message);
      return { error: error as AuthError };
    } finally {
      setLoading(false);
    }
  };

  // Get user profile data from a profile table
  const getUserProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!user) throw new Error("No user logged in");

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      return { data, success: true };
    } catch (error) {
      setError((error as Error).message);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  // Value to be provided by context
  const value: AuthContextType = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signInWithMagicLink,
    signInWithProvider,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    getUserProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
