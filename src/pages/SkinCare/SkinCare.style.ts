import styled from "styled-components";
import { AccordionHeader } from "react-bootstrap";

export const Wrapper = styled.div`
 

  div.acc {
    margin-left: 80px;
    padding-right: 40px;
    border-right: 1px solid black;
  }

  .accordion-button:not(.collapsed) {
    background-color: transparent;
    box-shadow: none;
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .accordion-button::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'%3E%3Cpath d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/%3E%3C/svg%3E");
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-dash' viewBox='0 0 16 16'%3E%3Cpath d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  }
`;

export const Title = styled.p`
  margin-left: 20%;
  margin-top: 150px;
  font-family: "Inria Serif", sans-serif;
`;

export const HorizontalLine = styled.div`
  width: 50%;
  height: 1px;
  margin-left: 80px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledAccordionHeader = styled(AccordionHeader)`
  font-family: "Inria Serif", sans-serif;
`