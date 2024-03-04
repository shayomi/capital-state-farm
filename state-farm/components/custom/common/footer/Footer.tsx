import { Typography } from "@/components/ui/typography";

import FooterContact from "./FooterContact";
import { Separator } from "@/components/ui/separator";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <section className="bg-secondary">
      <div className="container pt-20">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-between pb-12">
          <div className="sm:max-w-[220px] lg:max-w-[290px] xl:max-w-[350px]">
            <img
              src="/images/csf.svg"
              alt="capital state farm"
              className="w-[130px]"
            />

            <Typography variant="p" className="text-foreground">
              Nurturing nature&apos;s symphony from our farm to your kitchen and
              tables
            </Typography>
          </div>
          <div>
            <FooterLinks />
          </div>
          <div>
            <FooterContact />
          </div>
        </div>

        <Separator className="bg-background" />

        <div className="py-4">
          <Typography
            variant="smallText"
            className="text-black font-normal text-center"
          >
            2024 &#169; Capital State Farm. All rights reserved
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Footer;
