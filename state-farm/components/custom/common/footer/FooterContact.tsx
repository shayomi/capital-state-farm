import React from "react";
import { Typography } from "@/components/ui/typography";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-y-8 ">
      <div className="flex flex-col gap-y-2  ">
        <div>
          <Typography variant="h4" className="text-foreground font-bold">
            CONTACT US
          </Typography>
        </div>

        <div>
          <Typography variant="p" className="text-foreground font-bold">
            Email:{" "}
            <a href="mailto:info@capitalstatefarm" className="font-normal">
              info@capitalstatefarm
            </a>
          </Typography>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <div>
          <Typography variant="h4" className="text-foreground font-bold">
            FOLLOW US
          </Typography>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <div className="bg-primary rounded-sm p-1">
            <a href="https://facebook.com/" target="_blank">
              <img
                src="/images/facebook.svg"
                alt="facebook logo"
                width="27"
                height="27"
              />
            </a>
          </div>

          <div className="bg-primary rounded-sm p-1">
            <a href="https://twitter.com" target="_blank">
              <img
                src="/images/twitter.svg"
                alt="Twitter (X) logo"
                width="27"
                height="27"
              />
            </a>
          </div>

          <div className="bg-primary rounded-sm p-1">
            <a href="https://whatsapp.com" target="_blank">
              <img
                src="/images/whatsapp.svg"
                alt="whatsapp logo"
                width="27"
                height="27"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
