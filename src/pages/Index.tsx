import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('flights');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<any>(null);

  const flights = [
    {
      id: 'DL2345',
      airline: 'Delta Airlines',
      logo: 'D',
      from: 'JFK',
      to: 'LAX',
      departure: '08:00',
      arrival: '10:30',
      duration: '2ч 30м',
      price: 15999,
      class: 'Эконом',
      aircraft: 'Boeing 737-800',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'AA1234',
      airline: 'American Airlines',
      logo: 'A',
      from: 'JFK',
      to: 'LAX',
      departure: '09:15',
      arrival: '12:00',
      duration: '2ч 45м',
      price: 13999,
      class: 'Эконом',
      aircraft: 'Airbus A321',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'UA5678',
      airline: 'United Airlines',
      logo: 'U',
      from: 'JFK',
      to: 'LAX',
      departure: '11:30',
      arrival: '14:15',
      duration: '2ч 45м',
      price: 16999,
      class: 'Эконом',
      aircraft: 'Boeing 787',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const hotels = [
    {
      name: 'Hilton Paris Opera',
      rating: 5.0,
      reviews: 128,
      price: 20499,
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      name: 'Marriott Marquis NYC',
      rating: 4.8,
      reviews: 256,
      price: 26999,
      gradient: 'from-green-400 to-blue-600'
    },
    {
      name: 'Ritz-Carlton Tokyo',
      rating: 5.0,
      reviews: 89,
      price: 37999,
      gradient: 'from-purple-400 to-pink-600'
    }
  ];

  const cars = [
    {
      name: 'Toyota Corolla',
      rating: 4.2,
      reviews: 87,
      price: 2999,
      passengers: 5,
      bags: 2,
      transmission: 'Автоматическая',
      features: ['Кондиционер', 'Bluetooth'],
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Honda CR-V',
      rating: 4.8,
      reviews: 124,
      price: 4299,
      passengers: 5,
      bags: 3,
      transmission: 'Автоматическая',
      features: ['Кондиционер', 'GPS', '4WD'],
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'BMW 3 Series',
      rating: 4.9,
      reviews: 156,
      price: 7299,
      passengers: 5,
      bags: 2,
      transmission: 'Автоматическая',
      features: ['Климат-контроль', 'Premium Audio', 'Кожа'],
      gradient: 'from-yellow-400 to-orange-600'
    }
  ];

  const insurancePlans = [
    {
      name: 'Базовый',
      price: 2499,
      coverage: 50000,
      features: [
        { text: 'Медицинская помощь до $50,000', included: true },
        { text: 'Отмена поездки', included: true },
        { text: 'Потеря багажа', included: false },
        { text: 'Эвакуация', included: false }
      ],
      color: 'from-blue-400 to-blue-500',
      badge: null
    },
    {
      name: 'Стандартный',
      price: 4199,
      coverage: 100000,
      features: [
        { text: 'Медицинская помощь до $100,000', included: true },
        { text: 'Отмена поездки', included: true },
        { text: 'Потеря багажа до $1,000', included: true },
        { text: 'Эвакуация', included: false }
      ],
      color: 'from-purple-400 to-purple-500',
      badge: 'Популярный'
    },
    {
      name: 'Премиум',
      price: 6699,
      coverage: 250000,
      features: [
        { text: 'Медицинская помощь до $250,000', included: true },
        { text: 'Отмена поездки', included: true },
        { text: 'Потеря багажа до $2,000', included: true },
        { text: 'Эвакуация и репатриация', included: true }
      ],
      color: 'from-pink-400 to-pink-500',
      badge: null
    }
  ];

  const generateSeatMap = () => {
    const rows = 30;
    const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seats = [];

    for (let row = 1; row <= rows; row++) {
      for (const col of columns) {
        const seatId = `${row}${col}`;
        const isOccupied = Math.random() < 0.3;
        const isPremium = row <= 6;
        seats.push({
          id: seatId,
          row,
          col,
          occupied: isOccupied,
          premium: isPremium,
          price: isPremium ? 2000 : 0
        });
      }
    }
    return seats;
  };

  const seatMap = generateSeatMap();

  const toggleSeat = (seatId: string) => {
    const seat = seatMap.find(s => s.id === seatId);
    if (seat?.occupied) return;

    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const calculateTotalPrice = () => {
    let total = selectedFlight?.price || 0;
    selectedSeats.forEach(seatId => {
      const seat = seatMap.find(s => s.id === seatId);
      if (seat) total += seat.price;
    });
    return total;
  };

  const renderNavigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setActiveSection('home')} className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="Plane" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              SkyWings
            </span>
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`font-medium transition-colors ${
                activeSection === 'home' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('bookings')}
              className={`font-medium transition-colors ${
                activeSection === 'bookings' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Мои бронирования
            </button>
            <button
              onClick={() => setActiveSection('hotels')}
              className={`font-medium transition-colors ${
                activeSection === 'hotels' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Отели
            </button>
            <button
              onClick={() => setActiveSection('cars')}
              className={`font-medium transition-colors ${
                activeSection === 'cars' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Аренда авто
            </button>
          </div>
          <Button className="gradient-primary text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all">
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );

  const renderHomePage = () => (
    <>
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
                      <Input placeholder="Москва (SVO)" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Куда</label>
                    <div className="relative">
                      <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-500" />
                      <Input placeholder="Париж (CDG)" className="pl-10 h-12 border-purple-200 focus:border-purple-500" />
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
                    <Select defaultValue="1">
                      <SelectTrigger className="h-12 border-purple-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 взрослый</SelectItem>
                        <SelectItem value="2">2 взрослых</SelectItem>
                        <SelectItem value="3">3 взрослых</SelectItem>
                        <SelectItem value="4">4 взрослых</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={() => setActiveSection('flights')}
                  className="w-full h-14 text-lg gradient-primary text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all"
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти рейсы
                </Button>
              </TabsContent>

              <TabsContent value="hotels">
                <div className="text-center py-8">
                  <Button onClick={() => setActiveSection('hotels')} className="gradient-primary text-white">
                    Перейти к поиску отелей
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="cars">
                <div className="text-center py-8">
                  <Button onClick={() => setActiveSection('cars')} className="gradient-primary text-white">
                    Перейти к аренде авто
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="insurance">
                <div className="text-center py-8">
                  <Button onClick={() => setActiveSection('insurance')} className="gradient-primary text-white">
                    Перейти к страхованию
                  </Button>
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
              { city: 'Париж', country: 'Франция', price: '₽15,999', gradient: 'from-violet-500 to-purple-500', image: '🗼' },
              { city: 'Нью-Йорк', country: 'США', price: '₽42,999', gradient: 'from-purple-500 to-pink-500', image: '🗽' },
              { city: 'Токио', country: 'Япония', price: '₽38,999', gradient: 'from-pink-500 to-rose-500', image: '🗾' },
              { city: 'Барселона', country: 'Испания', price: '₽18,999', gradient: 'from-violet-400 to-purple-400', image: '🏖️' }
            ].map((destination, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover-scale"
              >
                <div className={`h-56 bg-gradient-to-br ${destination.gradient} relative flex items-center justify-center`}>
                  <span className="text-8xl opacity-20">{destination.image}</span>
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
                    <Button size="sm" onClick={() => setActiveSection('flights')} className="gradient-primary text-white border-0">
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
                color: 'from-blue-400 to-purple-600',
                onClick: () => setActiveSection('hotels')
              },
              {
                icon: 'Car',
                title: 'Аренда авто',
                description: 'Исследуйте город с арендованным автомобилем',
                color: 'from-purple-400 to-pink-600',
                onClick: () => setActiveSection('cars')
              },
              {
                icon: 'Shield',
                title: 'Страховка',
                description: 'Защитите свою поездку комплексной страховкой',
                color: 'from-pink-400 to-rose-600',
                onClick: () => setActiveSection('insurance')
              }
            ].map((service, index) => (
              <Card
                key={index}
                onClick={service.onClick}
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
    </>
  );

  const renderFlightsPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => setActiveSection('home')} className="mb-4">
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад к поиску
          </Button>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Найдено {flights.length} рейсов
          </h2>
          <p className="text-gray-600">Москва → Париж • 15 декабря</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 space-y-4">
            <Card className="p-4 border-0 shadow-lg">
              <h3 className="font-bold mb-4">Фильтры</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Пересадки</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Любые</SelectItem>
                      <SelectItem value="direct">Только прямые</SelectItem>
                      <SelectItem value="one">Макс. 1 пересадка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Сортировка</label>
                  <Select defaultValue="price">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price">Цена (по возрастанию)</SelectItem>
                      <SelectItem value="duration">Длительность</SelectItem>
                      <SelectItem value="departure">Время вылета</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex-1 space-y-4">
            {flights.map((flight) => (
              <Card key={flight.id} className="p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${flight.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {flight.logo}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg">{flight.airline}</h3>
                        <p className="text-sm text-gray-500">{flight.id} • {flight.aircraft}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div>
                        <p className="text-3xl font-bold">{flight.departure}</p>
                        <p className="text-gray-500">{flight.from}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">{flight.duration}</p>
                        <div className="relative h-0.5 bg-gray-200">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                          <Icon name="Plane" size={16} className="absolute right-0 -top-2 text-purple-500" />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Прямой</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold">{flight.arrival}</p>
                        <p className="text-gray-500">{flight.to}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-3">
                    <div className="text-right">
                      <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        ₽{flight.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">{flight.class}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => setSelectedFlight(flight)}
                          className="gradient-primary text-white border-0 shadow-lg hover:shadow-xl transition-all"
                        >
                          Выбрать места
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Выбор мест • {flight.airline} {flight.id}</DialogTitle>
                        </DialogHeader>
                        {renderSeatSelection()}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSeatSelection = () => {
    const rows = Array.from({ length: 30 }, (_, i) => i + 1);
    const columns = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
      <div className="py-4">
        <div className="flex gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <span className="text-sm">Доступно</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded"></div>
            <span className="text-sm">Выбрано</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
            <span className="text-sm">Занято</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded"></div>
            <span className="text-sm">Премиум (+₽2,000)</span>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1 bg-gray-50 rounded-xl p-6 max-h-[500px] overflow-y-auto">
            <div className="space-y-3">
              {rows.map((row) => (
                <div key={row} className="flex items-center gap-2">
                  <span className="w-8 text-center text-sm font-medium text-gray-500">{row}</span>
                  <div className="flex gap-2">
                    {columns.slice(0, 3).map((col) => {
                      const seatId = `${row}${col}`;
                      const seat = seatMap.find(s => s.id === seatId);
                      const isSelected = selectedSeats.includes(seatId);
                      return (
                        <button
                          key={seatId}
                          onClick={() => toggleSeat(seatId)}
                          disabled={seat?.occupied}
                          className={`w-10 h-10 rounded text-xs font-medium transition-all ${
                            seat?.occupied
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : isSelected
                              ? 'gradient-primary text-white shadow-lg scale-105'
                              : seat?.premium
                              ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                          }`}
                        >
                          {col}
                        </button>
                      );
                    })}
                  </div>
                  <div className="w-8"></div>
                  <div className="flex gap-2">
                    {columns.slice(3).map((col) => {
                      const seatId = `${row}${col}`;
                      const seat = seatMap.find(s => s.id === seatId);
                      const isSelected = selectedSeats.includes(seatId);
                      return (
                        <button
                          key={seatId}
                          onClick={() => toggleSeat(seatId)}
                          disabled={seat?.occupied}
                          className={`w-10 h-10 rounded text-xs font-medium transition-all ${
                            seat?.occupied
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : isSelected
                              ? 'gradient-primary text-white shadow-lg scale-105'
                              : seat?.premium
                              ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                          }`}
                        >
                          {col}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-80">
            <Card className="p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-4">Ваш заказ</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Рейс</p>
                  <p className="font-medium">{selectedFlight?.airline}</p>
                  <p className="text-sm text-gray-600">{selectedFlight?.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Выбранные места ({selectedSeats.length})</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSeats.length > 0 ? (
                      selectedSeats.map(seatId => (
                        <Badge key={seatId} className="gradient-primary text-white">
                          {seatId}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">Выберите места на схеме</p>
                    )}
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Билет</span>
                    <span>₽{selectedFlight?.price.toLocaleString()}</span>
                  </div>
                  {selectedSeats.some(seatId => seatMap.find(s => s.id === seatId)?.premium) && (
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Премиум места</span>
                      <span>₽{(selectedSeats.filter(seatId => seatMap.find(s => s.id === seatId)?.premium).length * 2000).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Итого</span>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ₽{calculateTotalPrice().toLocaleString()}
                    </span>
                  </div>
                </div>
                <Button
                  disabled={selectedSeats.length === 0}
                  className="w-full gradient-primary text-white border-0"
                >
                  Продолжить
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const renderHotelsPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <Button variant="ghost" onClick={() => setActiveSection('home')} className="mb-8">
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Поиск отелей
          </h2>
          <p className="text-gray-600">Найдите идеальное место для проживания</p>
        </div>

        <Card className="p-6 mb-12 border-0 shadow-lg">
          <div className="grid md:grid-cols-4 gap-4">
            <Input placeholder="Город" className="h-12" />
            <Input type="date" className="h-12" placeholder="Заезд" />
            <Input type="date" className="h-12" placeholder="Выезд" />
            <Button className="h-12 gradient-primary text-white">
              <Icon name="Search" size={18} className="mr-2" />
              Поиск
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all hover-scale">
              <div className={`h-48 bg-gradient-to-br ${hotel.gradient} flex items-center justify-center`}>
                <Icon name="Hotel" size={64} className="text-white/90" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className={i < Math.floor(hotel.rating) ? 'fill-current' : ''} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{hotel.rating} ({hotel.reviews} отзывов)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">от</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ₽{hotel.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">за ночь</p>
                  </div>
                  <Button className="gradient-primary text-white">Забронировать</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCarsPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <Button variant="ghost" onClick={() => setActiveSection('home')} className="mb-8">
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Аренда автомобилей
          </h2>
          <p className="text-gray-600">Найдите идеальный автомобиль для вашего путешествия</p>
        </div>

        <Card className="p-6 mb-12 border-0 shadow-lg">
          <div className="grid md:grid-cols-4 gap-4">
            <Input placeholder="Место получения" className="h-12" />
            <Input type="date" className="h-12" placeholder="Дата получения" />
            <Input type="date" className="h-12" placeholder="Дата возврата" />
            <Button className="h-12 gradient-primary text-white">
              <Icon name="Search" size={18} className="mr-2" />
              Поиск
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all hover-scale">
              <div className={`h-48 bg-gradient-to-br ${car.gradient} flex items-center justify-center relative`}>
                <Icon name="Car" size={80} className="text-white/90" />
                <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                  Бесплатная отмена
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="Star" size={14} className={i < Math.floor(car.rating) ? 'fill-current' : ''} />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">{car.rating} ({car.reviews})</span>
                </div>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-2 text-purple-500" />
                    {car.passengers} пассажиров
                  </div>
                  <div className="flex items-center">
                    <Icon name="Briefcase" size={16} className="mr-2 text-purple-500" />
                    {car.bags} больших багажа
                  </div>
                  <div className="flex items-center">
                    <Icon name="Settings" size={16} className="mr-2 text-purple-500" />
                    {car.transmission}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ₽{car.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">за сутки</p>
                  </div>
                  <Button className="gradient-primary text-white">Выбрать</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInsurancePage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <Button variant="ghost" onClick={() => setActiveSection('home')} className="mb-8">
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Страхование путешествий
          </h2>
          <p className="text-gray-600">Защитите свою поездку от непредвиденных обстоятельств</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insurancePlans.map((plan, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all hover-scale relative ${
                plan.badge ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.badge && (
                <Badge className="absolute top-4 right-4 z-10 gradient-primary text-white">
                  {plan.badge}
                </Badge>
              )}
              <div className={`h-48 bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                <Icon name="Shield" size={80} className="text-white/90" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  ₽{plan.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mb-6">На поездку</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icon
                        name={feature.included ? 'Check' : 'X'}
                        size={18}
                        className={`mr-3 mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-400'}`}
                      />
                      <span className={feature.included ? '' : 'text-gray-400'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.badge ? 'gradient-primary text-white' : ''}`}>
                  Выбрать {plan.name.toLowerCase()}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Почему стоит застраховать поездку?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Shield" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Защита от отмены рейса</h4>
                    <p className="text-gray-600">Возмещение средств при отмене или задержке рейса</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Heart" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Медицинская помощь</h4>
                    <p className="text-gray-600">Покрытие медицинских расходов за границей</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Icon name="Briefcase" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Защита багажа</h4>
                    <p className="text-gray-600">Компенсация при потере или повреждении багажа</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Icon name="Umbrella" size={120} className="text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookingsPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <Button variant="ghost" onClick={() => setActiveSection('home')} className="mb-8">
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Мои бронирования
          </h2>
          <p className="text-gray-600">Управляйте своими поездками</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-0 shadow-lg">
            <div className="flex items-center justify-center flex-col py-12">
              <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mb-6">
                <Icon name="Briefcase" size={64} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Активные бронирования</h3>
              <p className="text-gray-500 mb-6">У вас пока нет активных бронирований</p>
              <Button onClick={() => setActiveSection('home')} className="gradient-primary text-white">
                Найти рейсы
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h3 className="text-xl font-bold mb-6">История поездок</h3>
            <div className="space-y-4">
              {[
                { city: 'Париж', country: 'Франция', date: '15-22 мая 2023', color: 'from-purple-400 to-purple-500' },
                { city: 'Нью-Йорк', country: 'США', date: '10-17 марта 2023', color: 'from-blue-400 to-blue-500' }
              ].map((trip, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-16 h-16 bg-gradient-to-br ${trip.color} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">{trip.city}, {trip.country}</h4>
                    <p className="text-sm text-gray-500">{trip.date}</p>
                    <Badge className="mt-1 bg-green-100 text-green-700">Завершено</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      {renderNavigation()}

      {activeSection === 'home' && renderHomePage()}
      {activeSection === 'flights' && renderFlightsPage()}
      {activeSection === 'hotels' && renderHotelsPage()}
      {activeSection === 'cars' && renderCarsPage()}
      {activeSection === 'insurance' && renderInsurancePage()}
      {activeSection === 'bookings' && renderBookingsPage()}

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
