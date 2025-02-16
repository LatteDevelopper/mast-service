
import { useState } from "react";
import { Navigate } from "react-router-dom";

const CORRECT_PASSWORD = "mstservic21";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Неверный пароль");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50/30">
        <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-800">Вход в аналитику</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
