import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Icon name="Plane" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                SkyWings
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Рейсы
              </button>
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Отели
              </button>
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Аренда авто
              </button>
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Мои бронирования
              </button>
            </div>
            <Button className="gradient-primary text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Найдите идеальный рейс
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Сравните цены от сотен авиакомпаний и забронируйте следующее путешествие
            </p>
          </div>

          <Card className="max-w-5xl mx-auto p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-xl animate-scale-in">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-purple-100/50 p-1">
                <TabsTrigger value="flights" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="Plane" size={18} className="mr-2" />
                  Авиабилеты
                </TabsTrigger>
                <TabsTrigger value="hotels" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="Hotel" size={18} className="mr-2" />
                  Отели
                </TabsTrigger>
                <TabsTrigger value="cars" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="Car" size={18} className="mr-2" />
                  Аренда авто
                </TabsTrigger>
                <TabsTrigger value="insurance" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="Shield" size={18} className="mr-2" />
                  Страховка
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Откуда</label>
                    <div className="relative">
                      <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" />
                      <Input placeholder="Город или аэропорт" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Куда</label>
                    <div className="relative">
                      <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500" />
                      <Input placeholder="Город или аэропорт" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Туда</label>
                    <div className="relative">
                      <Icon name="Calendar" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" />
                      <Input type="date" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Обратно</label>
                    <div className="relative">
                      <Icon name="Calendar" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" />
                      <Input type="date" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Пассажиры</label>
                    <div className="relative">
                      <Icon name="Users" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" />
                      <Input placeholder="1 взрослый" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>
                </div>

                <Button className="w-full h-14 text-lg gradient-primary text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти рейсы
                </Button>
              </TabsContent>

              <TabsContent value="hotels" className="space-y-4">
                <div className="text-center py-12">
                  <Icon name="Hotel" size={64} className="mx-auto mb-4 text-purple-500" />
                  <h3 className="text-2xl font-bold mb-2">Поиск отелей</h3>
                  <p className="text-gray-600">Находим лучшие предложения для вашего проживания</p>
                </div>
              </TabsContent>

              <TabsContent value="cars" className="space-y-4">
                <div className="text-center py-12">
                  <Icon name="Car" size={64} className="mx-auto mb-4 text-purple-500" />
                  <h3 className="text-2xl font-bold mb-2">Аренда автомобилей</h3>
                  <p className="text-gray-600">Исследуйте город с комфортом</p>
                </div>
              </TabsContent>

              <TabsContent value="insurance" className="space-y-4">
                <div className="text-center py-12">
                  <Icon name="Shield" size={64} className="mx-auto mb-4 text-purple-500" />
                  <h3 className="text-2xl font-bold mb-2">Страхование путешествий</h3>
                  <p className="text-gray-600">Защитите свою поездку</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      <div className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Популярные направления
            </h2>
            <p className="text-gray-600">Откройте для себя удивительные места по всему миру</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: 'Париж', country: 'Франция', price: '₽15,999', gradient: 'from-violet-500 to-purple-500' },
              { city: 'Нью-Йорк', country: 'США', price: '₽42,999', gradient: 'from-purple-500 to-pink-500' },
              { city: 'Токио', country: 'Япония', price: '₽38,999', gradient: 'from-pink-500 to-rose-500' },
              { city: 'Барселона', country: 'Испания', price: '₽18,999', gradient: 'from-violet-400 to-purple-400' }
            ].map((destination, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover-scale"
              >
                <div className={`h-56 bg-gradient-to-br ${destination.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      <Icon name="Heart" size={14} className="mr-1" />
                      Популярно
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.city}</h3>
                    <p className="text-white/80">{destination.country}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">от</p>
                      <p className="text-2xl font-bold text-purple-600">{destination.price}</p>
                    </div>
                    <Button size="sm" className="gradient-primary text-white border-0">
                      Выбрать
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Дополните ваше путешествие
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Hotel',
                title: 'Отели',
                description: 'Найдите идеальное место для проживания',
                color: 'from-blue-400 to-purple-600'
              },
              {
                icon: 'Car',
                title: 'Аренда авто',
                description: 'Исследуйте город с арендованным автомобилем',
                color: 'from-purple-400 to-pink-600'
              },
              {
                icon: 'Shield',
                title: 'Страховка',
                description: 'Защитите свою поездку комплексной страховкой',
                color: 'from-pink-400 to-rose-600'
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover-scale bg-white/80 backdrop-blur-sm"
              >
                <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center relative`}>
                  <Icon name={service.icon as any} size={80} className="text-white/90 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    Узнать больше
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните свое путешествие сегодня
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Подпишитесь на нашу рассылку и получите скидку 10% на первое бронирование
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Ваш email"
                className="h-14 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="h-14 bg-white text-purple-600 hover:bg-white/90 font-bold px-8">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                  <Icon name="Plane" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">SkyWings</span>
              </div>
              <p className="text-gray-400">Ваш надежный партнер в мире путешествий</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkyWings. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
