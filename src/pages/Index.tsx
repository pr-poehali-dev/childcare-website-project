import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'methods', 'gallery', 'schedule', 'achievements', 'contacts'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">Воспитатель детского сада</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'methods', label: 'Методики' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'schedule', label: 'Расписание' },
                { id: 'achievements', label: 'Достижения' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Создаём будущее вместе
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Воспитатель детского сада с многолетним опытом работы по классической программе дошкольного образования
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Связаться со мной
              </Button>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/523028b8-f427-46d7-998b-e0afa5f4a593/files/f35f40ed-c836-4ffd-be37-8de9cbbeadc4.jpg"
                alt="Дети в детском саду"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/523028b8-f427-46d7-998b-e0afa5f4a593/files/b7113ce4-0cda-40ee-8530-c4c2d3c523c4.jpg"
                alt="Портрет воспитателя"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">Обо мне</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Моя профессия — воспитатель детского сада. Это не просто работа, 
                  это призвание, которое я с гордостью несу уже много лет.
                </p>
                <p>
                  Каждый день я помогаю детям открывать мир, развивать их способности 
                  и формировать личность. Работаю по классической программе дошкольного 
                  образования, уделяя внимание гармоничному развитию каждого ребёнка.
                </p>
                <p>
                  Для меня важно создать тёплую, дружелюбную атмосферу, где дети 
                  чувствуют себя в безопасности и могут свободно развиваться.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Методики работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'BookOpen',
                title: 'Обучение и развитие',
                description: 'Применяю классическую программу дошкольного образования для всестороннего развития детей'
              },
              {
                icon: 'Users',
                title: 'Социализация',
                description: 'Помогаю детям научиться взаимодействовать друг с другом, развивать эмпатию и коммуникативные навыки'
              },
              {
                icon: 'Heart',
                title: 'Индивидуальный подход',
                description: 'Учитываю особенности каждого ребёнка, создавая условия для раскрытия его потенциала'
              },
              {
                icon: 'Palette',
                title: 'Творческое развитие',
                description: 'Организую занятия по рисованию, лепке, музыке для развития творческих способностей'
              },
              {
                icon: 'Activity',
                title: 'Физическое воспитание',
                description: 'Провожу активные игры и упражнения для здорового физического развития детей'
              },
              {
                icon: 'Brain',
                title: 'Познавательная деятельность',
                description: 'Развиваю логическое мышление, память, внимание через игровые занятия'
              }
            ].map((method, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name={method.icon} size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Галерея занятий
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: 'https://cdn.poehali.dev/projects/523028b8-f427-46d7-998b-e0afa5f4a593/files/a20cf7cc-ebde-489b-a4a6-87165fb41b97.jpg',
                title: 'Творческие занятия',
                description: 'Рисование и лепка'
              },
              {
                src: 'https://cdn.poehali.dev/projects/523028b8-f427-46d7-998b-e0afa5f4a593/files/dd4de6ff-459a-479f-9971-a2758c0b3ef1.jpg',
                title: 'Физкультура',
                description: 'Активные игры'
              },
              {
                src: 'https://cdn.poehali.dev/projects/523028b8-f427-46d7-998b-e0afa5f4a593/files/af82a45f-73fe-48d6-af23-43af95c7a3b6.jpg',
                title: 'Конструирование',
                description: 'Развитие логики'
              },
              {
                src: 'https://cdn.poehali.dev/projects/523028b8-f427-46d7-998b-e0afa5f4a593/files/735955bf-e0e9-44c8-89b1-6b44f48903e8.jpg',
                title: 'Музыкальные занятия',
                description: 'Пение и танцы'
              }
            ].map((image, index) => (
              <Card 
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Расписание занятий
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                day: 'Понедельник',
                activities: [
                  { time: '9:00 - 9:30', name: 'Развитие речи', icon: 'MessageCircle' },
                  { time: '10:00 - 10:30', name: 'Физкультура', icon: 'Activity' },
                  { time: '11:00 - 11:30', name: 'Музыка', icon: 'Music' }
                ]
              },
              {
                day: 'Вторник',
                activities: [
                  { time: '9:00 - 9:30', name: 'Математика', icon: 'Calculator' },
                  { time: '10:00 - 10:30', name: 'Рисование', icon: 'Palette' },
                  { time: '11:00 - 11:30', name: 'Конструирование', icon: 'Box' }
                ]
              },
              {
                day: 'Среда',
                activities: [
                  { time: '9:00 - 9:30', name: 'Окружающий мир', icon: 'Globe' },
                  { time: '10:00 - 10:30', name: 'Физкультура', icon: 'Activity' },
                  { time: '11:00 - 11:30', name: 'Лепка', icon: 'HandMetal' }
                ]
              },
              {
                day: 'Четверг',
                activities: [
                  { time: '9:00 - 9:30', name: 'Чтение', icon: 'BookOpen' },
                  { time: '10:00 - 10:30', name: 'Музыка', icon: 'Music' },
                  { time: '11:00 - 11:30', name: 'Аппликация', icon: 'Scissors' }
                ]
              },
              {
                day: 'Пятница',
                activities: [
                  { time: '9:00 - 9:30', name: 'Математика', icon: 'Calculator' },
                  { time: '10:00 - 10:30', name: 'Физкультура', icon: 'Activity' },
                  { time: '11:00 - 11:30', name: 'Творческая мастерская', icon: 'Sparkles' }
                ]
              }
            ].map((schedule, dayIndex) => (
              <Card 
                key={dayIndex}
                className="p-6 animate-slide-in border-border"
                style={{ animationDelay: `${dayIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                  {schedule.day}
                </h3>
                <div className="space-y-3">
                  {schedule.activities.map((activity, actIndex) => (
                    <div 
                      key={actIndex}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Icon name={activity.icon} size={20} className="text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{activity.name}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Достижения
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                icon: 'Award',
                title: 'Профессиональные награды',
                description: 'Получила благодарности за многолетний добросовестный труд и вклад в развитие дошкольного образования'
              },
              {
                icon: 'GraduationCap',
                title: 'Повышение квалификации',
                description: 'Регулярно прохожу курсы повышения квалификации, изучаю современные методики работы с детьми'
              },
              {
                icon: 'Star',
                title: 'Успехи воспитанников',
                description: 'Мои выпускники успешно адаптируются в школе, показывают хорошие результаты в обучении'
              },
              {
                icon: 'Users',
                title: 'Признание родителей',
                description: 'Получаю положительные отзывы от родителей за внимательное отношение к детям и профессионализм'
              }
            ].map((achievement, index) => (
              <Card 
                key={index} 
                className="p-6 flex gap-6 items-start hover:shadow-md transition-shadow animate-slide-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon name={achievement.icon} size={24} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Если у вас есть вопросы или предложения, буду рада общению
          </p>
          <div className="grid gap-6">
            <Card className="p-8 flex items-center gap-4 hover:shadow-lg transition-shadow border-border">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center">
                <Icon name="Mail" size={28} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-medium text-foreground">your.email@example.com</p>
              </div>
            </Card>
            <Card className="p-8 flex items-center gap-4 hover:shadow-lg transition-shadow border-border">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center">
                <Icon name="Phone" size={28} className="text-secondary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                <p className="text-lg font-medium text-foreground">+7 (XXX) XXX-XX-XX</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Воспитатель детского сада. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Увеличенное фото"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;