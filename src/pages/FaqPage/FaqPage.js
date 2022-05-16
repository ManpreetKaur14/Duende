import React from "react";
import FaqHeader from "../../components/FaqPage/FaqHeader";
import { FaqData } from "./FaqData";
import '../../styles/FaqAccordion.css'
import styles from '../../styles/FaqPage.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function FaqPage() {
  return (
    <>
      <FaqHeader/>
      <main className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.faq_side_menu}>
                <div className={styles.categories_sec}>
                {/* CATEGORIES TITLE */}
                  <h2 className={styles.title}>Categories</h2>
                  {/* CATEGORIES LIST */}
                  <ul className={styles.categories_list}>
                    <li>General</li>
                    <li>Legal</li>
                    <li>Economy</li>
                    <li>Transactions</li>
                    <li>Mining</li>
                    <li>Security</li>
                    <li>Help</li>
                  </ul>
                </div>

                <div className={styles.tags_sec}>
                {/* TAGS TITLE */}
                  <h2 className={styles.title}>Tags</h2>
                  {/* TAGS LIST */}
                  <ul className={styles.tags_list}>
                    <li>Duende</li>
                    <li>Transfer</li>
                    <li>Map</li>
                    <li>Duende</li>
                    <li>Duende</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ACCORDIONS */}
            <div className="col-lg-8">
              <Accordion allowZeroExpanded>
                {FaqData.map((item) => (
                  <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{item.heading}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{item.content}</AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FaqPage;
