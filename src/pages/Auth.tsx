
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import { useUser } from "@/hooks/useUser";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  if (user) {
    navigate("/profile");
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Logged in successfully");
        navigate("/profile");
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } }
      });
      if (error) {
        toast.error(error.message || "Signup failed");
      } else {
        toast.success("Signup successful. Check your email to verify your account if required.");
        navigate("/profile");
      }
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div className="flex justify-center items-center py-32">
        <div className="w-full max-w-md bg-white border p-8 rounded-xl shadow space-y-6">
          <h2 className="font-serif text-2xl text-center mb-2">
            {mode === "login" ? "Sign In to Mirage" : "Create Your Mirage Account"}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
              />
            )}
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <Button className="w-full bg-mirage-bronze hover:bg-[#b28240] text-white" type="submit" disabled={loading}>
              {loading ? "Please Wait..." : mode === "login" ? "Sign In" : "Sign Up"}
            </Button>
          </form>
          <div className="text-center text-sm mt-4">
            {mode === "login" ? (
              <>
                No account?{" "}
                <button
                  className="text-mirage-bronze hover:underline"
                  onClick={() => setMode("signup")}
                >Sign up here</button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-mirage-bronze hover:underline"
                  onClick={() => setMode("login")}
                >Sign in</button>
              </>
            )}
          </div>
          <div className="text-center mt-3">
            <Link to="/" className="text-xs text-gray-500 hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
