import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const EmergencyCall = () => {
  return (
    <div className="py-20 bg-electric-orange relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/20 rounded-full animate-electric-pulse">
            <Icon name="Phone" size={48} className="text-white" />
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          🚨 ЭКСТРЕННЫЙ ВЫЗОВ
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Аварийная служба работает круглосуточно! Приедем в течение 30 минут по
          Москве и области
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "Clock",
              title: "30 МИНУТ",
              desc: "Время приезда по Москве",
            },
            {
              icon: "MapPin",
              title: "ВСЯ ОБЛАСТЬ",
              desc: "Работаем в МО и соседних регионах",
            },
            {
              icon: "Star",
              title: "БЕЗ ВЫХОДНЫХ",
              desc: "24/7 включая праздники",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="bg-white/10 border-white/20 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white mb-4 mx-auto"
                />
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            className="bg-white text-electric-orange hover:bg-gray-100 px-12 py-6 text-2xl font-bold animate-electric-pulse"
          >
            <Icon name="Phone" size={24} className="mr-3" />
            +7 (999) 123-45-67
          </Button>

          <p className="text-white/80 text-lg">
            💬 Или напишите в WhatsApp/Telegram
          </p>
        </div>

        <div className="mt-12 bg-white/10 p-6 rounded-xl border border-white/20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">
            ⚡ Экстренные ситуации:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "🔥 Короткое замыкание",
              "💡 Полное отключение света",
              "⚡ Искрение проводки",
              "🚿 Поломка насоса/бойлера",
              "❄️ Неисправность холодильника",
              "🔌 Нет электричества в квартире",
            ].map((emergency, i) => (
              <div key={i} className="text-white/90 font-medium">
                {emergency}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCall;
