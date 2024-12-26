"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BackButton } from "./backbutton";
import { Header } from "./header";
interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    header:string,
    showSocial?:boolean
  }


const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    header,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
  }: CardWrapperProps) => {
    return ( 
        <Card className="shadow-md w-[400px]">
          <CardHeader>
          <Header label={headerLabel} header={header} />
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
          {/* {
        showSocial && (
            <CardFooter>
            <Social />
          </CardFooter>
        )
      } */}
      <CardFooter>
        <BackButton label={backButtonLabel} backHref={backButtonHref} />
      </CardFooter>
        </Card>
     );
}
 
export default CardWrapper;