import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["JavaScript", "Python", "Figma","Photoshop", "C#", "C++", "C", "SQL", "HTML", "CSS", "TailwindCSS", "NextJS", "ReactJS", "NodeJS", "OOPS", "C++", "C", "Git", "MS Office", "Linux", "Windows",]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}