import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Heart, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Little Dragons",
      age: "Ages 4-6",
      description: "Fun, safe introduction to martial arts focusing on basic skills, respect, and following directions.",
      features: ["Basic kicks and punches", "Balance and coordination", "Listening skills", "Confidence building"],
      icon: Heart,
      color: "bg-pink-500/10 text-pink-600",
      popular: false
    },
    {
      title: "Youth Taekwondo",
      age: "Ages 7-12",
      description: "Traditional Taekwondo training with emphasis on character development and physical fitness.",
      features: ["Traditional forms", "Self-defense techniques", "Belt progression", "Leadership skills"],
      icon: Users,
      color: "bg-blue-500/10 text-blue-600",
      popular: true
    },
    {
      title: "Teen Program",
      age: "Ages 13-17",
      description: "Advanced training preparing students for leadership roles and competitive opportunities.",
      features: ["Advanced techniques", "Competition training", "Leadership development", "College prep"],
      icon: Zap,
      color: "bg-purple-500/10 text-purple-600",
      popular: false
    },
    {
      title: "Adult Classes",
      age: "Ages 18+",
      description: "Comprehensive martial arts training for fitness, self-defense, and personal development.",
      features: ["Complete workout", "Stress relief", "Self-defense", "Flexible scheduling"],
      icon: Trophy,
      color: "bg-green-500/10 text-green-600",
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Training Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect program for your age and skill level. Each program is designed to build 
            confidence, discipline, and physical fitness through traditional Taekwondo training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={program.title} 
                className="relative hover:scale-105 transition-all duration-300 martial-shadow group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {program.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="font-semibold text-accent">{program.age}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={program.popular ? "default" : "outline"} 
                    className="w-full mt-4"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which program is right for you?
          </p>
          <Button variant="outline" size="lg">
            Schedule a Free Trial Class
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;