
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-green-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Страница не найдена</h2>
          <p className="text-gray-500 mt-4">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">или</span>
          </div>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white transition-colors w-full"
            >
              Вернуться на главную
            </Button>
          </Link>
          
          <p className="text-sm text-gray-500">
            Если вы считаете, что произошла ошибка, пожалуйста,{" "}
            <Link 
              to="/contact" 
              className="text-green-600 hover:text-green-700 underline"
            >
              свяжитесь с нами
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
