import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const articles = [
    {
      id: 1,
      title: 'Современные тренды веб-дизайна 2024',
      excerpt: 'Изучаем самые актуальные подходы к созданию визуально привлекательных интерфейсов',
      category: 'Дизайн',
      date: '15 ноября 2024',
      image: '🎨',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'React 19: что нового?',
      excerpt: 'Обзор ключевых нововведений и улучшений в новой версии React',
      category: 'Разработка',
      date: '12 ноября 2024',
      image: '⚛️',
      readTime: '7 мин'
    },
    {
      id: 3,
      title: 'AI в контент-маркетинге',
      excerpt: 'Как искусственный интеллект меняет подходы к созданию контента',
      category: 'Маркетинг',
      date: '8 ноября 2024',
      image: '🤖',
      readTime: '6 мин'
    },
    {
      id: 4,
      title: 'Анимации, которые работают',
      excerpt: 'Практическое руководство по созданию плавных и осмысленных анимаций',
      category: 'Дизайн',
      date: '5 ноября 2024',
      image: '✨',
      readTime: '8 мин'
    },
    {
      id: 5,
      title: 'TypeScript: продвинутые техники',
      excerpt: 'Углубленное изучение типизации и паттернов в TypeScript',
      category: 'Разработка',
      date: '1 ноября 2024',
      image: '📘',
      readTime: '10 мин'
    },
    {
      id: 6,
      title: 'SEO в 2024: что изменилось',
      excerpt: 'Актуальные стратегии поисковой оптимизации для современных сайтов',
      category: 'SEO',
      date: '28 октября 2024',
      image: '🔍',
      readTime: '6 мин'
    }
  ];

  const categories = ['Все', 'Дизайн', 'Разработка', 'Маркетинг', 'SEO'];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="PenTool" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CreativeBlog
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'articles', label: 'Статьи', icon: 'BookOpen' },
                { id: 'about', label: 'О блоге', icon: 'Info' },
                { id: 'author', label: 'Автор', icon: 'User' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' }
              ].map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 animate-fade-in ${
                    activeSection === item.id ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <Button className="hidden md:flex space-x-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Icon name="Search" size={18} />
              <span>Поиск</span>
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 pb-32 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-scale-in">
            <Badge className="px-6 py-2 text-sm bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              ✨ Новый контент каждую неделю
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in leading-tight">
            Креативные идеи для современного мира
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-slide-up max-w-2xl mx-auto">
            Вдохновение, знания и практические советы о дизайне, разработке и цифровом творчестве
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 group"
              onClick={() => scrollToSection('articles')}
            >
              <span>Читать статьи</span>
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:border-primary hover:text-primary transition-all"
              onClick={() => scrollToSection('about')}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              <span>О проекте</span>
            </Button>
          </div>
        </div>
      </section>

      <section id="categories" className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, idx) => (
              <Button
                key={cat}
                variant={cat === 'Все' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-scale-in ${
                  cat === 'Все' 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'hover:bg-primary/10 hover:border-primary'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Последние публикации
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Свежие материалы и полезные инсайты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Card 
                key={article.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                  {article.image}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {article.date}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <span className="mr-2">Читать</span>
                      <Icon name="ArrowRight" size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 hover:border-primary hover:text-primary">
              <span>Показать больше статей</span>
              <Icon name="ChevronDown" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">О блоге</h2>
          </div>
          
          <Card className="border-border/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Миссия проекта</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>
                CreativeBlog — это пространство, где креативность встречается с технологиями. 
                Мы создаем контент, который вдохновляет, обучает и помогает развиваться профессионалам 
                в области дизайна, разработки и цифрового маркетинга.
              </p>
              <p>
                Наша цель — делиться знаниями, которые действительно работают. Каждая статья основана 
                на практическом опыте и актуальных трендах индустрии.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {[
                  { icon: 'Target', title: 'Практичность', desc: 'Только применимые знания' },
                  { icon: 'Zap', title: 'Актуальность', desc: 'Свежие тренды и технологии' },
                  { icon: 'Heart', title: 'Качество', desc: 'Глубокая проработка тем' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-background animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name={item.icon as any} className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="author" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Автор</h2>
          </div>
          
          <Card className="border-border/50 animate-scale-in">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-6xl shrink-0">
                  👨‍💻
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">Александр Креативов</h3>
                  <p className="text-xl text-primary mb-4">Дизайнер • Разработчик • Автор</p>
                  <p className="text-lg text-muted-foreground mb-6">
                    10+ лет опыта в веб-разработке и дизайне. Специализируюсь на создании 
                    современных интерфейсов и делюсь знаниями с сообществом.
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    {['Github', 'Linkedin', 'Twitter', 'Mail'].map((social, idx) => (
                      <Button 
                        key={social}
                        variant="outline" 
                        size="icon" 
                        className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all animate-scale-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <Icon name={social as any} size={20} />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Есть вопросы или предложения? Напишите мне!
            </p>
          </div>

          <Card className="border-border/50 animate-scale-in">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Icon name="User" size={16} className="mr-2 text-primary" />
                    Имя
                  </label>
                  <Input placeholder="Ваше имя" className="border-border/50" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Icon name="Mail" size={16} className="mr-2 text-primary" />
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" className="border-border/50" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Icon name="MessageSquare" size={16} className="mr-2 text-primary" />
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Расскажите, чем я могу помочь..." 
                    rows={6}
                    className="border-border/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg py-6"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 border-t border-border/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="PenTool" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">CreativeBlog</span>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Главная</button>
              <button className="hover:text-primary transition-colors">Статьи</button>
              <button className="hover:text-primary transition-colors">О блоге</button>
              <button className="hover:text-primary transition-colors">Контакты</button>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2024 CreativeBlog. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
