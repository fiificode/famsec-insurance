import Image from "next/image";
import React from "react";

const solutionContent = {
  text: {
    headingSubTitle: "Our Solutions",
    headingTitle:
      "From safeguarding your home with state-of-the-art alarm systems",
    description:
      "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family s protected in every aspect of life. With our Family Security Plan, you ca rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most  - your family's well being.",
    features: [
      {
        title: "Home Fire Safety",
      },
      {
        title: "Cybersecurity Solutions",
      },
      {
        title: "Emergency Preparedness",
      },
      {
        title: "Identity Theft Protection",
      },
    ],
    cta: {
      btn1: {
        href: "#",
        label: "Get started",
      },
      btn2: {
        href: "#",
        label: "How it works?",
      },
    },
  },
  images: {
    img1: "/images/solution-img-1.png",
    img2: "/images/solution-img-2.png",
    img3: "/images/solution-img-3.png",
  },
  experience: {
    year: "25+",
    label: "years of experience",
  },
};

const Solutions = () => {
  return (
    <section className="py-32 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div
            className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:content-[''] before:absolute 
                before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] 
                before:rounded-br-3xl before:py-28 before:top-20 before:bg-white before:-bottom-20"
          >
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    alt="image"
                    src={solutionContent?.images?.img1}
                    width={626}
                    height={640}
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24
                       rounded-2xl rounded-bl-[200px]"></div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src={solutionContent?.images?.img2}
                      width={626}
                      height={640}
                      alt="image"
                      className="object-cover h-full w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                  </div>
                  <div>
                    <Image
                      src={solutionContent?.images?.img3}
                      alt="image"
                      width={547}
                      height={573}
                      className="object-cover w-full h-full rounded-lg shadow-2xl"
                    />
                  </div>
                  {solutionContent?.experience?.label && (
                    <div>
                        <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                            <strong className="block font-bold text-primary text-xl lg:text-5xl">
                                {solutionContent.experience.year}
                            </strong>
                            <span>
                              {solutionContent.experience.label}
                            </span>
                        </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 relative z-10">
            {solutionContent?.text.headingSubTitle && (
              <span
                  className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative 
                        mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight 
                        before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                >
                  {solutionContent?.text.headingSubTitle}
                </span>
            )}
            {solutionContent?.text.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {solutionContent?.text.headingTitle}
              </h2>
            )}
            {solutionContent?.text?.description && (
              <p className="text-body leading-relaxed mb-10">
                {solutionContent.text.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
