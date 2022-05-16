import React from "react";
import TermsHeader from "../../components/FaqPage/PolicyHeader";
import styles from "../../styles/TermsPage.module.css";
import { PolicyData } from "./PolicyData";

function PolicyPage() {

  // TERMS LIST ITEM
  const Policyitem = (props) => {
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
            {PolicyData.map((item) => (
              <Policyitem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PolicyPage;
