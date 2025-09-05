import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users } from "lucide-react";
import instructorImage from "@/assets/instructor-portrait.jpg";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Master Sarah Johnson",
      rank: "6th Dan Black Belt",
      specialties: ["Youth Programs", "Competition Team", "Forms"],
      experience: "20+ Years",
      certifications: ["ATA Certified", "World Champion", "Master Instructor"],
      image: instructorImage,
      bio: "Master Johnson has dedicated her life to martial arts education and has trained over 200 black belts."
    },
    {
      name: "Instructor Mike Chen",
      rank: "4th Dan Black Belt",
      specialties: ["Adult Classes", "Self-Defense", "Weapons"],
      experience: "15+ Years",
      certifications: ["ATA Certified", "Self-Defense Specialist", "Weapons Expert"],
      image: instructorImage,
      bio: "Instructor Chen specializes in practical self-defense applications and adult fitness programs."
    },
    {
      name: "Instructor Lisa Rodriguez",
      rank: "3rd Dan Black Belt",
      specialties: ["Little Dragons", "Character Development", "Family Classes"],
      experience: "12+ Years",
      certifications: ["ATA Certified", "Child Development", "Family Program Leader"],
      image: instructorImage,
      bio: "Instructor Rodriguez has a special gift for working with young children and building character."
    }
  ];

  return (
    <section id="instructors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Meet Our Expert Instructors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from certified masters who are passionate about helping you achieve your martial arts goals. 
            Our instructors bring decades of experience and a commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {instructors.map((instructor, index) => (
            <Card 
              key={instructor.name} 
              className="overflow-hidden hover:scale-105 transition-all duration-300 martial-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{instructor.name}</h3>
                  <Badge variant="outline" className="text-accent border-accent">
                    {instructor.rank}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{instructor.experience} Experience</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Specialties:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {instructor.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Teaching Team</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Are you a passionate martial artist looking to share your knowledge? We're always looking for 
            qualified instructors to join our academy family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Now Hiring: Assistant Instructors
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Competitive Pay & Benefits
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;