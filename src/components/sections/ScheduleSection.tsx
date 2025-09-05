import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, DollarSign, Users } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Monday",
      classes: [
        { time: "4:00 PM", program: "Little Dragons", instructor: "Instructor Rodriguez", duration: "30 min" },
        { time: "5:00 PM", program: "Youth Taekwondo", instructor: "Master Johnson", duration: "45 min" },
        { time: "6:00 PM", program: "Adult Classes", instructor: "Instructor Chen", duration: "60 min" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "4:30 PM", program: "Teen Program", instructor: "Master Johnson", duration: "60 min" },
        { time: "6:00 PM", program: "Adult Classes", instructor: "Instructor Chen", duration: "60 min" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "4:00 PM", program: "Little Dragons", instructor: "Instructor Rodriguez", duration: "30 min" },
        { time: "5:00 PM", program: "Youth Taekwondo", instructor: "Master Johnson", duration: "45 min" },
        { time: "6:00 PM", program: "Adult Classes", instructor: "Instructor Chen", duration: "60 min" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "4:30 PM", program: "Teen Program", instructor: "Master Johnson", duration: "60 min" },
        { time: "6:00 PM", program: "Adult Classes", instructor: "Instructor Chen", duration: "60 min" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "4:00 PM", program: "Little Dragons", instructor: "Instructor Rodriguez", duration: "30 min" },
        { time: "5:00 PM", program: "Youth Taekwondo", instructor: "Master Johnson", duration: "45 min" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "9:00 AM", program: "Family Classes", instructor: "All Instructors", duration: "60 min" },
        { time: "10:30 AM", program: "Competition Team", instructor: "Master Johnson", duration: "90 min" }
      ]
    }
  ];

  const pricing = [
    {
      title: "Basic Membership",
      price: "$89",
      period: "per month",
      features: ["2 Classes per week", "Belt testing included", "Free uniform", "Family discounts available"],
      popular: false
    },
    {
      title: "Unlimited Training",
      price: "$129",
      period: "per month",
      features: ["Unlimited classes", "All programs included", "Priority belt testing", "Free sparring gear", "Guest passes"],
      popular: true
    },
    {
      title: "Competition Team",
      price: "$179",
      period: "per month",
      features: ["All Unlimited benefits", "Competition training", "Tournament entry fees", "Private coaching", "Equipment included"],
      popular: false
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Class Schedule & Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect class time that fits your schedule. We offer flexible options 
            for all ages and skill levels throughout the week.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Weekly Schedule
            </h3>
            <div className="space-y-4">
              {schedule.map((day) => (
                <Card key={day.day} className="animate-fade-in">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {day.classes.map((classItem, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Clock className="w-4 h-4 text-accent" />
                              <span className="font-medium">{classItem.time}</span>
                              <Badge variant="outline" className="text-xs">{classItem.duration}</Badge>
                            </div>
                            <p className="font-semibold text-sm">{classItem.program}</p>
                            <p className="text-xs text-muted-foreground">{classItem.instructor}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              Membership Options
            </h3>
            <div className="space-y-4">
              {pricing.map((plan, index) => (
                <Card 
                  key={plan.title} 
                  className={`relative animate-scale-in ${plan.popular ? 'ring-2 ring-primary martial-shadow' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{plan.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                          <span className="text-muted-foreground">/{plan.period}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className="w-full"
                    >
                      {plan.popular ? "Get Started" : "Learn More"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Family Discounts</h4>
            <p className="text-sm text-muted-foreground">Save 15% when 2+ family members join</p>
          </Card>
          
          <Card className="text-center p-6">
            <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Free Trial Class</h4>
            <p className="text-sm text-muted-foreground">Try any class for free before you commit</p>
          </Card>
          
          <Card className="text-center p-6">
            <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
            <p className="text-sm text-muted-foreground">Make up missed classes anytime</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;