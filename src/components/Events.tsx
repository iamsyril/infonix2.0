import { Presentation, Sparkles, Bug, Brain, MessageSquare, Hammer, Gamepad2, Music, Clock, MapPin, Coffee, UtensilsCrossed, Award, Mic } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Events = () => {
  const headerReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();
  const techHeaderReveal = useScrollReveal();
  const nonTechHeaderReveal = useScrollReveal();
  const noteReveal = useScrollReveal();
  const timelineEvents = [
    { time: '9.30am - 10.30am', event: 'Inauguration', venue: 'Main Hall', icon: Mic, type: 'ceremony' },
    { time: '10.30am - 11.00am', event: 'Tea Break & Snacks', venue: 'Cafeteria', icon: Coffee, type: 'break' },
    { time: '11.00am - 3.00pm', event: 'Paper Presentation', venue: 'Mini Conference Hall', icon: Presentation, type: 'technical' },
    { time: '11.00am - 1.00pm', event: 'Quiz Master', venue: 'Smart Class', icon: Brain, type: 'technical' },
    { time: '11.00am - 1.00pm', event: 'Myth Smash', venue: '2nd Yr Class', icon: Hammer, type: 'non-technical' },
    { time: '12.00pm - 3.30pm', event: 'Debugging', venue: 'IT Lab 1', icon: Bug, type: 'technical' },
    { time: '12.00pm - 2.30pm', event: 'Tune Hunt', venue: '3rd Class', icon: Music, type: 'non-technical' },
    { time: '1.15pm - 2.00pm', event: 'Lunch', venue: 'Mess', icon: UtensilsCrossed, type: 'break' },
    { time: '2.00pm - 3.00pm', event: 'E-Sports', venue: 'IT Lab 2', icon: Gamepad2, type: 'non-technical' },
    { time: '2.00pm - 3.30pm', event: 'Dialo Box', venue: '2nd Class', icon: MessageSquare, type: 'non-technical' },
    { time: '4.00pm - 5.00pm', event: 'Certificate & Prize Distribution', venue: 'Mini Conference Hall', icon: Award, type: 'ceremony' },
  ];
  const technicalEvents = [
    {
      icon: Presentation,
      name: 'Paper Presentation',
      description: 'Showcase your research and innovative ideas through structured presentations.',
      rules: [
        '3 members  for paper presentation ',
        '10 to 12 minutes : 3 mins for asking queries overall( 15mins ) ',
        'PPT format required maximum slides 10',
        'Domain:related to currently developing technologies'
      ],
      coordinator: 'R.Kaviya ',
      contact: '+91 8015782833',
    },
    {
      icon: Bug,
      name: 'Bug Buster',
      description: 'Blind debugging is when a programmer tries to find and fix errors by only reading and understanding the program without running or testing it, making changes based on assumptions.',
      rules: [
        'A problem must be solved within the given time duration',
        'Participants must debug the given code without compiling or executing it',
        'Electrical gadgets and search engines are not allowed during the even',
        'The coordinator’s decision will be final in all matters related to the event'
      ],
      coordinator: ' Subasri',
      contact: '+91 9655820195',
    },
    {
      icon: Brain,
      name: 'Quiz Master',
      description: 'The Quiz Master is an exciting team-based event that tests participants’ technical knowledge, analytical ability, and teamwork through progressively challenging quiz rounds.',
      rules: [
        'Teams of 3–5 members will compete in three quiz rounds with progressive elimination',
        'Top 3 teams advance from the Preliminary round and Top 2 teams reach the Final.',
        'Team-based prizes will be awarded, ties resolved by a tie-breaker, and others receive participation certificates'
      ],
      coordinator: 'K.Vishal',
      contact: '+91 9003675905',
    },
  ];

  const nonTechnicalEvents = [
    {
      icon: MessageSquare,
      name: 'Dialo Box',
      description: 'Recreate famous movie and literary dialogues on stage with powerful expressions, voice modulation, and dramatic flair, bringing iconic moments to life through performance.',
      rules: [
        'Individual performanceEach team must consist of 4 participants, and the event will be conducted in three rounds',
        'Top 3 teams from Round 1 will qualify for Round 2, and Top 2 teams from Round 2 will advance to the Final.',
        'Based on the points table, one team will be declared the Winner and one team the Runner-up',
        'Dialogues will be dictated only twice, and all participants except winners and runners will receive a participation certificate'
      ],
      coordinator: 'Jeevanadham',
      contact: '+91 9159217056',
    },
    {
      icon: Hammer,
      name: 'Myth Smash',
      description: 'Get ready for an electrifying challenge that blends *knowledge, speed, and teamwork! *Myth Smash is a two-round competition where teams of four battle against the clock to separate *Myths from Facts*',
      rules: [
        'Two fast-paced rounds filled with Myth vs. Fact statements',
        'Fun tasks must be completed before teams can identify the Myth.',
        'Each team has 4 members, working together under pressure.',
        'Only one answer attempt is allowed—accuracy matters!'
      ],
      coordinator: 'Abdul Vahith',
      contact: '+91 9344945738',
    },
    {
      icon: Gamepad2,
      name: 'E-Sports',
      description: 'A competitive eSports event featuring Free Fire and Subway Surfers, showcasing gaming skills and strategy.',
      rules: [
        'Free Fire – Rules',
        'Squad matches only (3–4 players); solo/duo players will be merged into squads.',
        'Participants must bring their own devices; triggers/gloves are allowed, but no extra skills or skins.',
        'Cheating or network issues are not the organizers’ responsibility; fair play is mandatory',
        'Subway Surfers – Rules',
        'The game must be installed on the spot; external aids like keys or surfboards are not allowed',
        'The participant with the highest score wins; in-game skills and multipliers are permitted'
      ],
      coordinator: 'Dino',
      contact: '+91 93615 82413',
    },
    {
      icon: Music,
      name: 'Tune Hunt',
      description: 'A fun and thrilling music quiz where participants identify songs from short BGMs played for 15–30 seconds. The first to press the buzzer gets the chance to answer within 15 seconds. Quick thinking and sharp ears win the game — find the tune before others do!',
      rules: [
        'Install the buzzer app and press the buzzer to identify the song when the BGM is played',
        'The first buzzer press gets the first chance; wrong answers pass the chance to the next participan',
        'If both answers are wrong, the BGM plays for 15 more seconds, the buzzer resets, and the next question starts',
        'Answer within 5 seconds by singing at least one line; the event has 3 rounds with 1st and 2nd prizes'
      ],
      coordinator: 'kumar',
      contact: '+91 8148691233',
    },
  ];

  const EventCard = ({ event, category, delay = 0 }: { event: any; category: string; delay?: number }) => {
    const cardReveal = useScrollReveal();
    
    return (
      <div 
        ref={cardReveal.ref}
        className={`flip-card h-[500px] transition-all duration-20 ${
          cardReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flip-card-inner">
          {/* Front of Card */}
          <div className="flip-card-front event-card">
            <div className={`w-16 h-16 ${category === 'technical' ? 'bg-gradient-primary' : 'bg-gradient-accent'} rounded-lg flex items-center justify-center mb-4 shadow-elegant`}>
              <event.icon size={32} className="text-white" />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              {event.name}
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-center">
              {event.description}
            </p>

            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-sm text-primary font-medium">
                 see details →
              </p>
            </div>
          </div>

          {/* Back of Card */}
          <div className="flip-card-back event-card">
            <div className="space-y-4 h-full flex flex-col">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {event.name}
              </h3>
              
              <div className="space-y-2 flex-1 overflow-y-auto">
                <h4 className="text-sm font-semibold text-foreground">Rules:</h4>
                <ul className="space-y-1.5">
                  {event.rules.map((rule: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-sm space-y-1 pt-3 border-t border-border mt-auto">
                <div className="font-medium text-foreground">
                  Coordinator: {event.coordinator}
                </div>
                <div className="text-muted-foreground">
                  Contact: {event.contact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="section-padding min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Events & <span className="bg-gradient-accent bg-clip-text text-transparent">Competitions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Participate in diverse technical and non-technical events designed to challenge 
            your skills, creativity, and knowledge across multiple domains.
          </p>
        </div>
        {/* Event Timeline */}
        <div 
          ref={timelineReveal.ref}
          className={`mb-20 transition-all duration-1000 ${
            timelineReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-xl shadow-elegant">
              <Clock className="inline-block mr-2 -mt-1" size={24} />
              Event Timeline
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden lg:block" />
            
            <div className="space-y-6">
              {timelineEvents.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 lg:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`timeline-card inline-block p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      item.type === 'ceremony' 
                        ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
                        : item.type === 'break'
                        ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30'
                        : item.type === 'technical'
                        ? 'bg-gradient-to-br from-primary/20 to-blue-500/20 border-primary/30'
                        : 'bg-gradient-to-br from-accent/20 to-pink-500/20 border-accent/30'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          item.type === 'ceremony' 
                            ? 'bg-yellow-500/30' 
                            : item.type === 'break'
                            ? 'bg-green-500/30'
                            : item.type === 'technical'
                            ? 'bg-primary/30'
                            : 'bg-accent/30'
                        }`}>
                          <item.icon size={20} className="text-foreground" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground text-lg">
                            {item.event}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock size={14} />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        <span>{item.venue}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-6 h-6 rounded-full bg-background border-4 border-primary z-10 flex-shrink-0" />
                  
                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Technical Events */}
        <div className="mb-16">
          <div 
            ref={techHeaderReveal.ref}
            className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
              techHeaderReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-lg shadow-elegant">
              Technical Events
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard 
                key={index} 
                event={event} 
                category="technical"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <div 
            ref={nonTechHeaderReveal.ref}
            className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
              nonTechHeaderReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-accent text-accent-foreground px-6 py-3 rounded-full font-heading font-semibold text-lg shadow-glow">
              Non-Technical Events
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard 
                key={index} 
                event={event} 
                category="non-technical"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <div 
          ref={noteReveal.ref}
          className={`text-center mt-12 p-6 bg-muted/50 rounded-lg transition-all duration-1000 ${
            noteReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-muted-foreground">
            <span className="font-semibold">Note:</span> Detailed event rules and guidelines will be shared with registered participants. 
            For specific queries, please contact the respective event coordinators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
