import React from 'react'
import Accordion from "react-bootstrap/Accordion";

function Reviews({ reviewData }) {
  return (
    <div>
      <Accordion className="pb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            {reviewData.map((i, index) => (
              <div className="acc">
                <p>
                  {index + 1} . name- {i.name}
                </p>
                <p>date- {i.date}</p>
                <p>rating- {i.rating}⭐</p>
                <p>comments- {i.comments}</p>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Reviews