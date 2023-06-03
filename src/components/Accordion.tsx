import { useState } from "react";

interface AccordionProps {
  accodionTitle: string;
  accordionContent: string;
  isH2: boolean;
  isExpanded: boolean;
}

const Accordion = ({
  accodionTitle,
  accordionContent,
  isH2,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleAccordionExpansion = function () {
    if (isExpanded === true) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
    console.log(isExpanded);
  };
  return (
    <>
      <div className="accordion-header" aria-expanded={isExpanded}>
        <button
          className={
            !isExpanded
              ? "accordion-header__trigger"
              : "accordion-header__trigger accordion-header__trigger--active"
          }
          type="button"
          onClick={() => handleAccordionExpansion()}
        >
          <span className="visually-hidden">Trigger for the accordion</span>
          {isH2 ? (
            <h2 className="accordion-header__trigger-title">{accodionTitle}</h2>
          ) : (
            <h3 className="accordion-header__trigger-title">{accodionTitle}</h3>
          )}
        </button>
      </div>
      <div
        className={
          !isExpanded
            ? "accordion-body"
            : "accordion-body accordion-body--active"
        }
      >
        <p>{accordionContent}</p>
      </div>
    </>
  );
};

export default Accordion;
