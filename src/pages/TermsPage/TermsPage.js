import React from "react";
import TermsHeader from "../../components/FaqPage/TermsHeader";
import styles from "../../styles/TermsPage.module.css";
import { TermsData } from "./TermsData";

function TermsPage() {

  // TERMS LIST ITEM
  const TermItem = (props) => {
    const { id, heading, content } = props.data;
    return (
      <div className={styles.term_item} key={id}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    );
  };
  return (
    <>
      <TermsHeader />
      <main>
        <div className="container">
          <div className={styles.terms_page_holder}>
          {/* TERMS LIST */}
            {TermsData.map((item) => (
              <TermItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default TermsPage;
