import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-electric-purple via-gray-900 to-black overflow-hidden">
      {/* Анимированные искры */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue rounded-full animate-spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-electric-blue/20 rounded-full animate-electric-pulse">
            <Icon name="Zap" size={64} className="text-electric-blue" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-electric-orange bg-clip-text text-transparent">
          ⚡ ЭЛЕКТРИК 24/7
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Аварийный выезд • Ремонт техники • Умные дома • Гарантия на все работы
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-electric-orange hover:bg-electric-orange/80 text-white px-8 py-4 text-lg animate-electric-pulse"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            ЭКСТРЕННЫЙ ВЫЗОВ
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 text-lg"
          >
            <Icon name="Calculator" size={20} className="mr-2" />
            ПРАЙС-ЛИСТ
          </Button>
        </div>

        {/* Карточки услуг */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: "Clock",
              title: "24/7 ВЫЗОВ",
              desc: "Аварийный выезд в любое время",
            },
            {
              icon: "Settings",
              title: "УМНЫЙ ДОМ",
              desc: "Установка и настройка систем",
            },
            { icon: "Shield", title: "ГАРАНТИЯ", desc: "На все виды работ" },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-electric-blue/30 hover:border-electric-blue transition-all"
            >
              <Icon
                name={service.icon as any}
                size={32}
                className="text-electric-orange mb-4 mx-auto"
              />
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
