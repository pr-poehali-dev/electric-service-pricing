import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PriceList = () => {
  const services = [
    {
      category: "⚡ Электромонтажные работы",
      items: [
        {
          name: "Замена розетки/выключателя",
          price: "от 500₽",
          urgent: "800₽",
        },
        { name: "Установка люстры", price: "от 1200₽", urgent: "1800₽" },
        { name: "Прокладка кабеля (1м)", price: "от 300₽", urgent: "450₽" },
        { name: "Замена автомата в щитке", price: "от 800₽", urgent: "1200₽" },
      ],
    },
    {
      category: "🔧 Ремонт бытовой техники",
      items: [
        { name: "Диагностика на дому", price: "от 800₽", urgent: "1200₽" },
        {
          name: "Ремонт стиральной машины",
          price: "от 1500₽",
          urgent: "2200₽",
        },
        { name: "Ремонт холодильника", price: "от 1800₽", urgent: "2700₽" },
        {
          name: "Ремонт посудомоечной машины",
          price: "от 1600₽",
          urgent: "2400₽",
        },
      ],
    },
    {
      category: "🏠 Умный дом",
      items: [
        {
          name: "Установка умных выключателей",
          price: "от 1500₽",
          urgent: "2200₽",
        },
        {
          name: "Настройка системы освещения",
          price: "от 3000₽",
          urgent: "4500₽",
        },
        { name: "Установка видеодомофона", price: "от 2500₽", urgent: "3700₽" },
        {
          name: "Интеграция систем безопасности",
          price: "от 5000₽",
          urgent: "7500₽",
        },
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-electric-orange bg-clip-text text-transparent">
            💰 ПРАЙС-ЛИСТ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Честные цены без скрытых доплат. Гарантия на все работы!
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {services.map((category, i) => (
            <Card
              key={i}
              className="bg-white/5 border-electric-blue/30 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-electric-blue flex items-center gap-3">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.name}</h4>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="text-right">
                          <div className="text-electric-blue font-bold">
                            {item.price}
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs border-electric-orange text-electric-orange"
                          >
                            Срочно: {item.urgent}
                          </Badge>
                        </div>
                        <Icon
                          name="Zap"
                          size={20}
                          className="text-electric-orange"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-electric-blue/20 p-6 rounded-xl border border-electric-blue/30 max-w-2xl mx-auto">
            <Icon
              name="Shield"
              size={32}
              className="text-electric-orange mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              Гарантия качества
            </h3>
            <p className="text-gray-300">
              ✅ Гарантия на работы до 2 лет <br />
              ✅ Бесплатный повторный выезд при гарантийном случае <br />✅
              Официальный договор и чек
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
