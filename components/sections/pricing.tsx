import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$10",
    description: "Perfect for individuals and small teams",
    features: [
      { name: "Up to 5 team members", included: true },
      { name: "Basic analytics", included: true },
      { name: "24/7 support", included: true },
      { name: "1GB storage", included: true },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$20",
    description: "Ideal for growing businesses and larger teams",
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority 24/7 support", included: true },
      { name: "10GB storage", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">
                  {plan.price}
                  <span className="text-lg font-normal">/month</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mr-2 h-5 w-5 text-red-500" />
                      )}
                      <span className={feature.included ? "" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
