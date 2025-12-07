/*------ accordion(prism-code for showcode purpose) start ------*/

export const accordion1 = `
<Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about any HTML can go within the <code>.accordion-body</code>, though the
          transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about  any HTML can go within the <code>.accordion-body</code>, though the
        transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion1 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} defaultActiveKey="1" />`

export const accordion2 = `
<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
       default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
          just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
         <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
       </Accordion.Body>
        </Accordion.Item>
      </Accordion>`;

export const reusableaccordion2 = ` 
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} defaultActiveKey="1" />`


export const accordion3 = `
<Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>Placeholder content for this accordion,
           which isintended to demonstrate the <code>.accordion-flush</code> class.
           This is the first item's accordion body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>which is intended to demonstrate the <code>.accordion-flush</code> class.
           This is thesecond item's accordion body. Let's imagine this being filled
           with some actual content.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>Placeholder content for this accordion,
            which is intended to demonstrate the <code>.accordion-flush</code> class.
            This is the third item's accordion body. Nothing more exciting happening
            here in  terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would look in a
            real-world application.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion> `;

export const reusableaccordion3 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Flushdata} flush={true} closeAll={true} accordionClass="accordion-flush" />
`
export const accordion4 = `
<Accordion defaultActiveKey="0" className="accordion accordion-solid-primary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion4 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} accordionClass="accordion-solid-primary" defaultActiveKey="1" />`

export const accordion5 = `
<Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
       <Accordion.Header>Accordion Item #3</Accordion.Header>
       <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about  any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion5 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

  <SpkAccordions items={Basicdata} accordionClass="accordion-solid-secondary" defaultActiveKey="1" />`

export const accordion6 = `
<Accordion defaultActiveKey="0" className="accordion accordion-primary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
       </Accordion.Body>
       </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about  any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
         </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion6 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-primary" defaultActiveKey="1" />`

export const accordion7 = `
<Accordion defaultActiveKey="0" className="accordion accordion-secondary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion7 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-secondary" defaultActiveKey="1" />`

export const accordion8 = `
<Accordion defaultActiveKey="0" 
      className="accordion accordion-customicon1 accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion8 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-customicon1 accordions-items-seperate" defaultActiveKey="1" />
`

export const accordion9 = `
<Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
      <Accordion.Item eventKey="0" className="custom-accordion-primary">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
         default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just  about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
       <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
      by default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance, as
      well as the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It's also worth noting that
      just about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accordion-item custom-accordion-danger">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
       by default, until the collapse plugin adds the appropriate classes that we
       use to style each element. These classes control the overall appearance, as
       well as the showing and hiding via CSS transitions. You can modify any of this with
       custom CSS or overriding our default variables. It's also worth noting that
       just about  any HTML can go within the <code>.accordion-body</code>, though the
       transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion9 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Customdata} accordionClass="customized-accordion accordions-items-seperate" defaultActiveKey="1" />`


export const accordion10 = `
<Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion10 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-border-primary accordions-items-seperate" defaultActiveKey="1" />`

export const accordion11 = `
<Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion11 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} accordionClass="accordion-border-success accordions-items-seperate" defaultActiveKey="1" />`

export const accordion12 = `
<Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion12 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordionicon-left accordions-items-seperate" defaultActiveKey="1" />
`

export const accordion13 = `
<Accordion defaultActiveKey="0" 
      className="accordion accordionicon-none accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion13 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordionicon-none accordions-items-seperate" defaultActiveKey="1" />
`

export const accordion14 = `
<p className="mb-0">
      <SpkButton onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={open}
        href="#collapseExample" className="btn btn-primary collapsed mb-2 me-1" role="button">
          Link with href</SpkButton>
      <SpkButton  onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={open}
        variant='' className="btn btn-secondary collapsed mb-2" type="button">
          Button with data-bs-target</SpkButton>
      </p> 
      <Collapse in={openb}>
      <div className="card card-body mb-0">
          Some placeholder content for the collapse component. This panel
          is
          hidden by default but revealed when the user activates the
          relevant
          trigger.
      </div>
      </Collapse>`;

export const accordion15 = `
<p className="mb-0">
      <SpkButton className="btn btn-primary mb-2 me-1"  onClick={() => { first() }}>Toggle first element</SpkButton>
      <SpkButton variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second() }}>Toggle second element</SpkButton>
      <SpkButton variant='' className="btn btn-danger mb-2" type="button"  onClick={() => { both() }}>Toggle both elements</SpkButton>
                                      </p>
      <Row>
          <div className="col m-1">
      {isFirstCollapsed ? (
              <div className=" multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body mb-0">
                      Some placeholder content for the first collapse
                      component of
                      this multi-collapse example. This panel is hidden by
                      default
                      but revealed when the user activates the relevant
                      trigger.
                  </div>
              </div>
          ) : null}
          </div>
          <div className="col m-1">
          {isSecondCollapsed ? (
              <div className=" multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body mb-0">
                      Some placeholder content for the second collapse
                      component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the
                      relevant
                      trigger.
                  </div>
              </div>
           ) : null}
          </div>
      </Row>`;

export const accordion16 = `
<p><SpkButton onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
      Toggle width collapse</SpkButton>                   
      </p><div style={{ minHeight: '120px' }}>
      <Collapse in={open} dimension="width">
      <div id="example-collapse-text">
          <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. It's
           hidden by default and shown when triggered.
          </Card>
      </div>
      </Collapse>
      </div>`;

export const accordion17 = `
<Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about any HTML can go within the <code>.accordion-body</code>, though the
          transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about  any HTML can go within the <code>.accordion-body</code>, though the
        transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

// carousel

export const carousel1 = `
<Carousel id="carouselExampleControls" 
      className="carousel slide" data-bs-ride="carousel" indicators={false}>
      <Carousel.Item className="active">
      <Image fill src="../../../assets/images/media/media-28.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-31.jpg"
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-29.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel1 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";
<SpkCarouselComponent items={Carouseldata} />`

export const carousel2 = `
<Carousel id="carouselExampleIndicators" 
      className="carousel slide" data-bs-ride="carousel">
      <Carousel.Item className="active">
      <Image fill src="../../../assets/images/media/media-25.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-29.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-30.jpg"
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel2 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Indicatorcarousel} mainClass="carousel slide" indicators={true} />`


export const carousel3 = `
<Carousel id="carouselExampleSlidesOnly" 
      className="carousel slide carousel-icons" indicators={false}>
      <Carousel.Item className="active">
          <Image fill src="../../../assets/images/media/media-26.jpg"
           className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-27.jpg"
           className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-33.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel3 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Slidecarousel} />`

export const carousel4 = `
<Carousel id="carouselExampleCaptions" 
      className="carousel slide" data-bs-ride="carousel">
      <Carousel.Item className="active">
      <Image fill src="../../../assets/images/media/media-59.jpg" 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-60.jpg" 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-61.jpg" 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel4 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Captioncarousel} mainClass="carousel slide" indicators={true} />`

export const carousel6 = `
Carousel fade id="carouselExampleFade" 
      className="carousel slide carousel-fade" indicators={false}>
      <Carousel.Item className="active">
         <Image fill src="../../../assets/images/media/media-43.jpg" 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
         <Image fill src="../../../assets/images/media/media-44.jpg" 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
         <Image fill src="../../../assets/images/media/media-45.jpg" 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel6 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Crosscarousel} fade={true} mainClass="carousel slide carousel-fade" indicators={false} />`


export const carousel5 = `
<Carousel id="carouselExampleInterval" 
      className="carousel slide" data-bs-ride="carousel" indicators={false}>
      <Carousel.Item interval={1000} className="active" >
          <Image fill src="../../../assets/images/media/media-40.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <Image fill src="../../../assets/images/media/media-41.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item >
          <Image fill src="../../../assets/images/media/media-42.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel5 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent interval1={1000} items={Individualcarousel} mainClass="carousel slide" indicators={false} />`

export const carousel7 = `
<Carousel touch={false} id="carouselExampleControlsNoTouching" 
      className="carousel slide" data-bs-touch="false" indicators={false}
      data-bs-interval="false">
      <Carousel.Item className="carousel-item active">
          <Image fill src="../../../assets/images/media/media-63.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-64.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-62.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel7 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Disablecarousel} mainClass="carousel slide" indicators={false}
data-bs-interval="false"/>`

export const carousel8 = `
<Carousel id="carouselExampleDark"
      className="carousel slide">
      <Carousel.Item className="active" data-bs-interval="10000">
      <Image fill src="../../../assets/images/media/media-13.jpg"
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>First slide label</h5>
      <p className="op-7">Some representative placeholder 
      content for the first slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item data-bs-interval="2000">
      <Image fill src="../../../assets/images/media/media-14.jpg"
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Second slide label</h5>
      <p className="op-7">Some representative placeholder 
      content for the second slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-18.jpg" 
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Third slide label</h5>
      <p className="op-7">Some representative placeholder
      content for the third slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel8 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Darkcarousel} mainClass="carousel slide" indicators={true} />`

//

//Modals & closes
export const modal1 = `
export default function BasicModal () {   
          const [show, setShow] = useState(false);
      
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          return(
      <SpkButton variant="primary" onClick={handleShow}>
       Launch demo modal</SpkButton>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title as="h6">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={handleClose}>
              Close
          </SpkButton>
          <SpkButton variant="primary" onClick={handleClose}>
              Save Changes
          </SpkButton>
          </Modal.Footer>
      </Modal>
      )}`;

export const modal2 = `
export default function BasicModal () {   
          const [show1, setShow1] = useState(false)
          
          const handleClose1 = () => setShow1(false)
          const handleShow1 = () => setShow1(true)
          return(
          <SpkButton variant="primary" onClick={handleShow}>
           Launch static backdrop modal</SpkButton>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
              <Modal.Title as="h6">Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              I will not close if you click outside me. Don not even try to press
              escape key.
              </Modal.Body>
              <Modal.Footer>
              <SpkButton variant="secondary" onClick={handleClose}>
                  Close
              </SpkButton>
              <SpkButton variant="primary">Understood</SpkButton>
              </Modal.Footer>
          </Modal>
          )}`;

export const modal3 = `
export default function BasicModal () {   
          const [show1, setShow1] = useState(false)
          
          const handleClose1 = () => setShow1(false)
          const handleShow1 = () => setShow1(true)
          return(
              <SpkButton variant='primary' type="button" className="btn btn-primary" onClick={handleShow2}>
              Scrolling long content
              </SpkButton>
              <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false}>
                  <Modal.Header closeButton>
                  <Modal.Title as="h6">Modal title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Libero
                                  ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                  nisi
                                  ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                  voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                  ex
                                  tempore fuga similique ipsa blanditiis et accusamus
                                  temporibus
                                  commodi voluptas! Nobis veniam illo architecto expedita quam
                                  ratione quaerat omnis. In, recusandae eos! Pariatur,
                                  deleniti
                                  quis ad nemo ipsam officia temporibus, doloribus fuga
                                  asperiores
                                  ratione distinctio velit alias hic modi praesentium aperiam
                                  officiis eaque, accusamus aut. Accusantium assumenda,
                                  commodi
                                  nulla provident asperiores fugit inventore iste amet aut
                                  placeat
                                  consequatur reprehenderit. Ratione tenetur eligendi, quis
                                  aperiam dolores magni iusto distinctio voluptatibus minus a
                                  unde
                                  at! Consequatur voluptatum in eaque obcaecati, impedit
                                  accusantium ea soluta, excepturi, quasi quia commodi
                                  blanditiis?
                                  Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                  consequuntur quod quo veniam? Labore dignissimos reiciendis
                                  accusamus recusandae est consequuntur iure.</p>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <p>Lorem ipsum dolor sit amet.</p>
                  </Modal.Body>
                  <Modal.Footer>
                  <SpkButton variant="secondary" onClick={handleClose2}>
                      Close
                  </SpkButton>
                  <SpkButton variant="primary">Understood</SpkButton>
                  </Modal.Footer>
              </Modal>
          )}`;

export const modal8 = `
export default function BasicModal () {   
          const [modalShow, setModalShow] = useState(false);
          return(
          <SpkButton type="button" className="btn btn-primary" 
          onClick={() => setModalShow(true)}">
              Vertically centered modal
          </SpkButton>
          <Modal centered show={modalShow} onHide={() => setModalShow(false)} 
          keyboard={false} className="modal fade">
          <Modal.Header closeButton>
          <Modal.Title as="h6">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
           nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={() => setModalShow(false)}>
              Close
          </SpkButton>
          <SpkButton variant="primary">Understood</SpkButton>
          </Modal.Footer>
          </Modal>
          )}`;

export const modal5 = `
export default function BasicModal () {   
          const [modalShow, setModalShow] = useState(false);
          return(
          <SpkButton type="button" className="btn btn-primary" 
          onClick={() => setModalShow(true)}">
              Vertically centered modal
          </SpkButton>
          <Modal centered show={modalShow} onHide={() => setModalShow(false)} 
          keyboard={false} className="modal fade">
          <Modal.Header closeButton>
          <Modal.Title as="h6">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
           nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={() => setModalShow(false)}>
              Close
          </SpkButton>
          <SpkButton variant="primary">Understood</SpkButton>
          </Modal.Footer>
          </Modal>
          )}`;

export const modal4 = `
export default function BasicModal () {   
          const [show3, setShow3] = useState(false);
          const handleClose3 = () => setShow3(false);
          const handleShow3 = () => setShow3(true);
          return(
          <SpkButton variant='primary' type="button" className="" onClick={handleShow3}>
          Launch demo modal</SpkButton>
          <Modal show={show3} onHide={handleClose3} centered className='popover-modal'>
          <Modal.Header closeButton>
          <Modal.Title as="h6"> Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body> <h5>Popover in a modal</h5>
          <p> This
              <SpkTooltips trigger="click"
              placement='right'
              // autoclose='true'
              overlay={
                  <Popover placement='bottom'>
                  <Popover.Header> Popover bottom</Popover.Header>
                  <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  </Popover.Body>
                  </Popover>
              }>
              <SpkButton variant="secondary" className="me-2 ms-2">button</SpkButton>
              </SpkTooltips>
              triggers a popover on click.
          </p>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={handleClose3}>
              Close
          </SpkButton>
          <SpkButton variant="primary">
              Save Changes
          </SpkButton>
          </Modal.Footer>
          </Modal>
          )}`;

export const modal7 = `
export default function BasicModal () {   
          const [modalShow2, setModalShow2] = useState(false)
          return(
          <SpkButton variant='primary' type="button" className="" onClick={handleShow3}>
          Launch demo modal</SpkButton>
          <Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
           <Modal.Header closeButton>
           <Modal.Title as="h6"> Modal title</Modal.Title>
           </Modal.Header>
           <Modal.Body> 
               <Container fluid>
          <Row>
              <Col md={4} className=" bg-light border">.col-md-4</Col>
              <Col md={4} className=" ms-auto bg-light border">.col-md-4
                  .ms-auto</Col>
          </Row>
          <Row className="row mt-3">
              <Col md={3} className=" ms-auto bg-light border">.col-md-3
                  .ms-auto</Col>
              <Col md={2} className=" ms-auto bg-light border">.col-md-2
                  .ms-auto</Col>
          </Row>
          <Row className="row mt-3">
              <Col md={6} className=" ms-auto bg-light border">.col-md-6
                  .ms-auto</Col>
          </Row>
          <Row className="row mt-3">
              <Col sm={9} className=" bg-light border">
                  Level 1: .col-sm-9
                  <Row>
          <Col sm={6} className="col-8 bg-light border">
                  Level 2: .col-8 .col-sm-6
          </Col>
          <Col sm={6} className="col-4 bg-light border">
               Level 2: .col-4 .col-sm-6
                                   </Col>
                               </Row>
                           </Col>
                       </Row>
                   </Container>
           </Modal.Body>
           <Modal.Footer>
           <SpkButton variant="secondary" onClick={() => setModalShow2(false)}>
               Close
           </SpkButton>
           <SpkButton variant="primary">
               Save Changes
           </SpkButton>
           </Modal.Footer>
          </Modal>
          )}`;

export const modal6 = `
export default function BasicModal () {   
          const [show3, setShow3] = useState(false);
          const handleClose3 = () => setShow3(false);
          const handleShow3 = () => setShow3(true);  //  Twomodals
          const [showt1, setShowt1] = useState(false)
          const [showt2, setShowt2] = useState(false)
          const handleCloset1 = () => setShowt1(false)
          const handleShowt1 = () => setShowt1(true)
          const handleCloset2 = () => setShowt2(false)
          const handleShowt2 = () => setShowt2(true)
          
          const Handleclose1 = () => {
            setShowt1(false)
            setShowt2(true)
          }
          const Handleclose2 = () => {
            setShowt2(false)
            setShowt1(true)
          }
          return(
              <SpkButton variant="outline-primary" data-bs-toggle="modal"  onClick={handleShowt1}
              >Open first modal
              </SpkButton>
              <Modal id="m1" className="fade" aria-hidden="true"
                  aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1}>
                  <Modal.Header closeButton>
                      <h6 className="modal-title" id="exampleModalToggleLabel">Modal 1
                      </h6>
                  </Modal.Header>
                  <Modal.Body>
                                      Show a second modal and hide this one with the button below.
                  </Modal.Body>
                  <Modal.Footer>
                      <SpkButton variant='' className="btn btn-outline-primary" onClick={Handleclose1}
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal">Open second modal</SpkButton>
                  </Modal.Footer>
              </Modal>
              <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                  centered show={showt2} onHide={handleCloset2}>
                  <Modal.Header>
                      <h6 className="modal-title" id="exampleModalToggleLabel2">Modal 2
                      </h6>
                      <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></SpkButton>
                  </Modal.Header>
                  <Modal.Body>
                                      Hide this modal and show the first with the button below.
                  </Modal.Body>
                  <Modal.Footer>
                      <SpkButton variant='' className="btn btn-outline-primary" data-bs-target="#exampleModalToggle" onClick={Handleclose2}
                          data-bs-toggle="modal">Back to first</SpkButton>
                  </Modal.Footer>
              </Modal>
          )}`;

export const modal10 = `
export default function BasicModal () {   
          // small modal
          const [smShow, setSmShow] = useState(false);
          
          //large modal
          const [lgShow, setLgShow] = useState(false);
          
          //large modal
          const [xlShow, setXlShow] = useState(false);
          return(
              <Modal size="xl" show={xlShow} onHide={() => setXlShow(false)}
              aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Header closeButton>
              <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                  Extra large Modal
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
          </Modal>
          <Modal size="lg" show={lgShow} onHide={() => 
          setLgShow(false)}aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
              <Modal.Title as="h6" id="example-modal-sizes-title-lg">
                  Large Modal
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
          </Modal>
          <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Header closeButton>
              <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                  Small Modal
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
          </Modal>
          )}`;

export const modal9 = `
export default function BasicModal () {   
          //fullscreen modals
          const values =  [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
          const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
          const [fullscreen, setFullscreen] = useState(true);
          const [showf, setShowf] = useState(false);
        
          function handleShowf(breakpoint, color) {
            setFullscreen(breakpoint);
            setShowf(true);
          }
        return(
            {values.map((v, idx) => (
                <SpkButton
                key={idx}
                onClick={() => handleShowf(v, colors[idx % colors.length])}
                >
                </SpkButton>
            ))}
            <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
                <Modal.Header closeButton>
                <Modal.Title as="h6">Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        )}`;

export const modal11 = `
export default function BasicModal () {   
          const [show6, setShow6] = useState(false);
          
          const handleClose6 = () => setShow6(false);
          const handleShow6 = () => setShow6(true);
          return(
          <SpkButton variant='light' type="button" 
          className="btn btn-light mb-1" onClick={handleShow6}>Open modal for
          @getbootstrap</SpkButton>
          <Modal show={show6} onHide={handleClose6}>
                  <Modal.Header closeButton>
                  <Modal.Title as="h6>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Recipient:</Form.Label>
          <Form.Control
              type="email"
              placeholder=" @getbootstrap"
              autoFocus
          />
          </Form.Group>
          <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} />
          </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={handleClose6}>
              Close
          </SpkButton>
          <SpkButton variant="primary">Send message</SpkButton>
          </Modal.Footer>
          </Modal>
          )}`;

export const modal12 = `
<SpkButton variant='' type="button" className="btn-close" 
      aria-label="Close"></SpkButton>`;

export const modal13 = `
<SpkButton variant='' type="button" className="btn-close"
      disabled aria-label="Close"></SpkButton>`;

export const modal14 = `
<CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
      <CloseButton type="button" className="btn-close btn-close-white" disabled
      aria-label="Close"></CloseButton>`;

export const modal15 = `
export const Modal = ()= {
        const [animation1, setanimation1] = useState(false);
      
        let viewDemoShow1 = (modal) => {
          switch (modal) {
            case "Basic":
              setanimation1(true)
              break;
          }
        let viewDemoClose1 = (modal) => {
            switch (modal) {
              case "Basic":
                setanimation1(false)
                break;
        return(
          <Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
          <Link to="#" className="modal-effect btn btn-primary btn-block"  onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
          <Rodal onClose={hide} visible={animation1} animation='Scale' height={280} onClick={() => viewDemoClose1("Basic")} >
            <div className='modal-header'>Modal Header
              <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic") }}><i className='fe fe-x ms-auto'></i></span></Link>
            </div>
            <div className='modal-body'>
              <h6>Modal Body</h6>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
            <div className='modal-footer'>
              <SpkButton className="me-2" variant="primary" onClick={() => viewDemoClose1("Basic")}>Save Changes</SpkButton>
              <SpkButton variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</SpkButton>
            </div>
          </Rodal>
        </Col>
         )
        };`
//

//placeholders

export const placeholder2 = `
<p className="placeholder-glow mb-0">
      <span className="placeholder col-12"></span>
       </p>
      <p className="placeholder-wave mb-0">
      <span className="placeholder col-12"></span>
       </p>`;

export const placeholder1 = `
<span className="placeholder col-12 placeholder-xl mb-1"></span>
      <span className="placeholder col-12 placeholder-lg"></span>
      <span className="placeholder col-12"></span>
      <span className="placeholder col-12 placeholder-sm"></span>
      <span className="placeholder col-12 placeholder-xs"></span>`;

export const placeholder3 = `
<span className="placeholder col-12"></span>
      <span className="placeholder col-12 bg-primary"></span>
      <span className="placeholder col-12 bg-secondary"></span>
      <span className="placeholder col-12 bg-success"></span>
      <span className="placeholder col-12 bg-danger"></span>
      <span className="placeholder col-12 bg-warning"></span>
      <span className="placeholder col-12 bg-info"></span>
      <span className="placeholder col-12 bg-light"></span>
      <span className="placeholder col-12 bg-dark"></span>`;

export const placeholder4 = `
<span className="placeholder bg-primary col-6"></span>
      <span className="placeholder bg-primary w-75"></span>
      <span className="placeholder bg-primary" style={{width: 25}}></span>`;
//

//offcanvas

export const offcanvas2 = `
export function Defaultlink() {
          const [show, setShow] = useState(false);
        
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
        
          return (
            <>
              <SpkButton variant="primary" onClick={handleShow}>
                Link with href
              </SpkButton>
        <SpkButton variant='primary' className="mb-1" type="button" onClick={handleShow}
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
         Button with data-bs-target
        </SpkButton>
        
        <Offcanvas show={show} onHide={handleClose} backdrop={true} 
        className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Contacts</h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
        ......
        </Offcanvas.Body>
        </Offcanvas>
            </>
          );
        }`;

export const offcanvas3 = `
export function Defaultlink() {
          const [show1, setShow1] = useState(false);
        
          const handleClose1 = () => setShow1(false);
          const handleShow1 = () => setShow1(true);
        
          return (
            <>
              <SpkButton variant="primary" onClick={handleShow1}>
              Enable
              body scrolling
              </SpkButton>
        
        <Offcanvas show={show1} onHide={handleClose1} backdrop={false} 
        className="offcanvas-start" data-bs-scroll="true"
        data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel">
        <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
         <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Contacts</h5>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
              ...........
              </Offcanvas.Body>
            </>
          );
        }`;

export const offcanvas1 = `
export function Defaultlink() {
          //static
          const [show2, setShow2] = useState(false);
          
          const handleClose2 = () => setShow2(false);
          const handleShow2 = () => setShow2(true);
          
            return (
              <>
          <SpkButton className="btn btn-primary" type="button"
          onClick={handleShow2}> Toggle static offcanvas
          </SpkButton>
          <Offcanvas show={show2} onHide={handleClose2} backdrop="static"
           className="offcanvas-start"  tabIndex={-1}
          id="staticBackdrop" aria-labelledby="staticBackdropLabel">
          <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
              <h5 className="offcanvas-title" id="staticBackdropLabel">Contacts</h5>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0">
          ....
          </Offcanvas.Body>
          </Offcanvas>
              </>
            );
          }`;

export const offcanvas4 = `
export function Defaultlink() {
          const [show3, setShow3] = useState(false);
        
          const handleClose3 = () => setShow3(false);
          const handleShow3 = () => setShow(true);
        
          return (
            <>
        <SpkButton className="btn btn-primary" type="button" 
        onClick={handleShow3}>Enable both scrolling &amp; 
        backdrop</SpkButton>
        
        <Offcanvas show={show3} onHide={handleClose3} backdrop={true} 
        className="offcanvas-start" data-bs-scroll="true" tabIndex={-1}
        id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <Offcanvas.Header closeButton 
        className="border-bottom border-block-end-dashed">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Contacts</h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
                                                  
                                                </Offcanvas.Body>
                                            </Offcanvas>
            </>
          );
        }`;

export const offcanvas5 = `
export function Defaultlink() {
          const [showb, setShowb] = useState(false);
          
          const handleCloseb = () => setShowb(false);
          const handleShowb = () => setShowb(true);
          
            return (
              <>
              <SpkButton className="btn btn-primary mb-1" type="button" 
               onClick={handleShowb}>Toggle bottom offcanvas</SpkButton>
               <Offcanvas placement='bottom' show={showb} onHide={handleCloseb}
                className="offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
               aria-labelledby="offcanvasBottomLabel">
               <Offcanvas.Header closeButton className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                   </h5>
               </Offcanvas.Header>
               <Offcanvas.Body className=" small">
                   ...
               </Offcanvas.Body>
           </Offcanvas>
              </>
            );
          }`;

