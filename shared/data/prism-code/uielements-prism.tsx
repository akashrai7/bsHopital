export const Basicalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

import {Alert} from "react-bootstrap";
const [showr, setShowr] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setShowr((prevAlert) => ({ ...prevAlert, [alertName]: false }));
}; 

{showr && (
    <Alert variant="warning" dismissible show={showr} >
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <Button variant='' className="btn-close" onClick={handleDismiss}><i className="bi bi-x"></i></Button>
    </Alert>
)} // End Prism Code//`;

export const ReuseBasicalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
}; 

<SpkAlert show={alert['basicAlert']} variant="warning" Dismiss={true} >
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<SpkButton Buttonvariant='' Customclass="btn-close" onClickfunc={() => handleRemoveAlert('basicAlert')}><i className="bi bi-x"></i></SpkButton>
</SpkAlert>// End Prism Code//`;

export const Livealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert, Button} from "react-bootstrap";

<Button type="button" className='mt-2' onClick={handleShowAlert}>
	Show live alert
							</Button>
<Alert variant='warning' className="alert-dismissible fade show" role="alert" show={show} onClick={toggleShow}>
<strong>Holy guacamole!</strong> You should check in on some of those fields
below.
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert> // End Prism Code//`;

export const Livereusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert, Button} from "react-bootstrap";

 {alerts.map((alert) => (
        <SpkAlert variant="success" CustomClass="alert-dismissible" key={alert.id}>
            <strong>Nice, </strong> you triggered this alert message!
            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" onClickfunc={() => handleCloseAlert(alert.id)}>
                <i className="bi bi-x"></i>
            </SpkButton>
    </SpkAlert>
))}
    <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="mt-2" Buttonlabel="Close" onClickfunc={handleShowAlert}>
    Show live alert
</SpkButton> // End Prism Code//`;

export const Outlinealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {outlinealert} from "@/shared/data/ui-elements/alertsdata";

{outlinealert.map((idx,index) => (
    <Alert variant={idx.class} className="alert-dismissible fade show" key={index}>
        A simple outline primary alert—check it out!
        <Button variant='' type="button" className="btn-close"
        onClick={() => handleRemove1(idx.id)} data-bs-dismiss="alert" 
        aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
    ))} // End Prism Code//`;

export const Outlinereusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {outlinealert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};
{Outlinealerts.map((idx, index) => (

    <SpkAlert show={alert["outline#{index}"]} variant={idx.class} CustomClass="alert-dismissible" key={index}>
        {idx.text}
        <SpkButton Buttonvariant={idx.color} Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("outline#{index}")}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`;

export const Outlinedataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert3 {
	id: number
	text: string
	color: string
	class: string
}
export const Outlinealerts: alert3[] = [
	{ id: 1, text: "A simple outline primary alert-check it out! ", class: "outline-primary", color: "" },
	{ id: 2, text: "A simple outline primary1 alert-check it out! ", class: "outline-primary1", color: "" },
	{ id: 3, text: "A simple outline primary2 alert-check it out! ", class: "outline-primary2", color: "" },
	{ id: 4, text: "A simple outline primary3 alert-check it out! ", class: "outline-primary3", color: "" },
	{ id: 5, text: "A simple outline secondary alert-check it out!", class: "outline-secondary", color: "" },
	{ id: 6, text: "A simple outline info alert-check it out!", class: "outline-info", color: "" },
	{ id: 7, text: "A simple outline warning alert-check it out! ", class: "outline-warning", color: "" },
	{ id: 8, text: "A simple outline success alert-check it out!", class: "outline-success", color: "" },
	{ id: 9, text: "A simple outline danger alert-check it out! ", class: "outline-danger", color: "" },
	{ id: 10, text: "A simple outline light alert-check it out! ", class: "outline-light", color: "text-default" },
	{ id: 11, text: "A simple outline dark alert-check it out!", class: "outline-dark", color: "" },

]; // End Prism Code//`

export const Soliddataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface alert4 {
        id: number
        text: string
        class: string
        size: string
    }
    export const Shadowsolidalerts: alert4[] = [
        { id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "sm" },
        { id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "" },
        { id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "lg" },
        { id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "sm" },
        { id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "" },
        { id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "lg" },
    
    ];
    `
export const Solidalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {shadowsolidalert} from "@/shared/data/ui-elements/alertsdata";

{shadowsolidalert.map((idx,index) => (
    <Alert variant={idx.class} className={'alert shadow- &#36;{idx.size} alert-dismissible fade show'} key={index}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
            onClick={() => handleRemove2(idx.id)}
            aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
))} // End Prism Code//`;
export const Solidreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
    import {shadowsolidalert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Shadowsolidalerts.map((idx, index) => (
    <SpkAlert show={alert["shadows#{index}"]} variant={idx.class} CustomClass={"shadow-#{idx.size} alert-dismissible"} key={index}>
        {idx.text}
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("shadows#{index}")}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`;

export const dataalert9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface alert5 {
        text: string
        class: string
        size: string
    }
    export const Defaultsolidalerts: alert5[] = [
        { text: "A simple solid primary alert with small shadow—check it out! ", class: "primary", size: "sm" },
        { text: "A simple solid primary alert with normal shadow—check it out! ", class: "primary", size: "" },
        { text: "A simple solid primary alert with large shadow—check it out! ", class: "primary", size: "lg" },
        { text: "A simple solid secondary alert with small shadow—check it out!", class: "secondary", size: "sm" },
        { text: "A simple solid secondary alert with normal shadow—check it out!", class: "secondary", size: "" },
        { text: "A simple solid secondary alert with large shadow—check it out!", class: "secondary", size: "lg" },
    ];
    `
export const Shadowalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Defaultsolidalerts} from "@/shared/data/ui-elements/alertsdata";

{Defaultsolidalerts.map((idx,index) => (
    <Alert variant={idx.class} className={'alert shadow- &#36;{idx.size}'} key={index}>A simple primary alert with small shadow—check it out!</Alert>
))}`
export const Shadowreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
    import {Defaultsolidalerts} from "@/shared/data/ui-elements/alertsdata";
    
     {Defaultsolidalerts.map((idx,index) => (
        <SpkAlert variant={idx.class} CustomClass={'shadow&#36;idx.size}'} key={index}>{idx.text}</SpkAlert>
    ))}
// End Prism Code//`

export const Shadowdataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
interface alert1 {
	id: number
	text: string
	class: string
}

export const Defaultalerts: alert1[] = [
	{ id: 1, text: " A simple primary alert—check it out!", class: "primary" },
	{ id: 2, text: " A simple primary1 alert—check it out!", class: "primary1" },
	{ id: 3, text: " A simple primary2 alert—check it out!", class: "primary2" },
	{ id: 4, text: " A simple primary3 alert—check it out!", class: "primary3" },
	{ id: 5, text: " A simple secondary alert—check it out!", class: "secondary" },
	{ id: 6, text: " A simple success alert—check it out!", class: "success" },
	{ id: 7, text: " A simple danger alert—check it out!", class: "danger" },
	{ id: 8, text: " A simple warning alert—check it out!", class: "warning" },
	{ id: 9, text: " A simple info alert—check it out!", class: "info" },
	{ id: 10, text: " A simple light alert—check it out!", class: "light" },
	{ id: 11, text: " A simple dark alert—check it out!", class: "dark" },
];

// End Prism Code//`

export const Defaultreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";

<SpkAlert variant="primary">A simple primary alert—check it out!</SpkAlert>
<SpkAlert variant="primary1">A simple primary1 alert—check it out!</SpkAlert>
<SpkAlert variant="primary2">A simple primary2 alert—check it out!</SpkAlert>
<SpkAlert variant="primary3">A simple primary3 alert—check it out!</SpkAlert>
<SpkAlert variant="secondary">A simple secondary alert—check it out!</SpkAlert>
<SpkAlert variant="success">A simple success alert—check it out!</SpkAlert>
<SpkAlert variant="danger">A simple danger alert—check it out!</SpkAlert>
<SpkAlert variant="warning">A simple warning alert—check it out!</SpkAlert>
<SpkAlert variant="info">A simple info alert—check it out!</SpkAlert>
<SpkAlert variant="light">A simple light alert—check it out!</SpkAlert>
<SpkAlert variant="dark">A simple dark alert—check it out!</SpkAlert> // End Prism Code//`;

export const Defaultalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";

<Alert variant="primary">A simple primary alert—check it out!</Alert>
<Alert variant="primary1">A simple primary1 alert—check it out!</Alert>
<Alert variant="primary2">A simple primary2 alert—check it out!</Alert>
<Alert variant="primary3">A simple primary3 alert—check it out!</Alert>
<Alert variant="secondary">A simple secondary alert—check it out!</Alert>
<Alert variant="success">A simple success alert—check it out!</Alert>
<Alert variant="danger">A simple danger alert—check it out!</Alert>
<Alert variant="warning">A simple warning alert—check it out!</Alert>
<Alert variant="info">A simple info alert—check it out!</Alert>
<Alert variant="light">A simple light alert—check it out!</Alert>
<Alert variant="dark">A simple dark alert—check it out!</Alert> // End Prism Code//`;

export const Linkdataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert2 {
	text1: string
	text2: string
	text3: string
	class: string
}
export const Linkalerts: alert2[] = [
	{ text1: "A simple primary alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "primary" },
	{ text1: "A simple primary1 alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "primary1" },
	{ text1: "A simple primary2 alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "primary2" },
	{ text1: "A simple primary3 alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "primary3" },
	{ text1: "A simple secondary alert with", text2: "an example link ", text3: "Give it a click if you like", class: "secondary" },
	{ text1: "A simple success alert with", text2: "an example link ", text3: "Give it a click if you like", class: "success" },
	{ text1: "A simple danger alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "danger" },
	{ text1: "A simple warning alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "warning" },
	{ text1: "A simple info alert with", text2: "an example link ", text3: "Give it a click if you like", class: "info" },
	{ text1: "A simple light alert with ", text2: "an example link ", text3: "Give it a click if you like", class: "light" },
	{ text1: "A simple dark alert with", text2: "an example link ", text3: "Give it a click if you like", class: "dark" },

]; // End Prism Code//`

export const Linkalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Defaultalerts} from "@/shared/data/ui-elements/alertsdata";

{Defaultalerts.map((idx,index)=>(
    <Alert variant={idx.class} role="alert">
       {idx.text1} <Link href="#!"  
   className="alert-link">{idx.text2}</Link>{idx.text3}
    </Alert>
    ))} // End Prism Code//`;

export const Linkreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {Linkalerts} from "@/shared/data/ui-elements/alertsdata";

{Linkalerts.map((idx,index) => (
    <SpkAlert variant={idx.class} key={index}>{idx.text1}
        <Link href="#!" className="alert-link">{idx.text2}</Link>{idx.text3}
    </SpkAlert>
))} // End Prism Code//`;

export const Colordatalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert3 {
	id: number
	text: string
	color: string
	class: string
}
export const Solidalerts: alert3[] = [
	{ id: 1, text: "A simple solid primary alert-check it out! ", class: "solid-primary", color: "" },
	{ id: 2, text: "A simple solid primary1 alert-check it out! ", class: "solid-primary1", color: "" },
	{ id: 3, text: "A simple solid primary2 alert-check it out! ", class: "solid-primary2", color: "" },
	{ id: 4, text: "A simple solid primary3 alert-check it out! ", class: "solid-primary3", color: "" },
	{ id: 5, text: "A simple solid secondary alert-check it out!", class: "solid-secondary", color: "" },
	{ id: 6, text: "A simple solid info alert-check it out!", class: "solid-info", color: "" },
	{ id: 7, text: "A simple solid warning alert-check it out! ", class: "solid-warning", color: "" },
	{ id: 8, text: "A simple solid success alert-check it out!", class: "solid-success", color: "" },
	{ id: 9, text: "A simple solid danger alert-check it out! ", class: "solid-danger", color: "" },
	{ id: 10, text: "A simple solid light alert-check it out! ", class: "solid-light", color: "text-default" },
	{ id: 11, text: "A simple solid dark alert-check it out!", class: "solid-dark", color: "text-white" },

]; // End Prism Code//`

export const Coloralert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert} from "react-bootstrap";
import {solidalert} from "@/shared/data/ui-elements/alertsdata";

{solidalert.map((idx,index) => (
 <Alert variant={idx.class} className="alert-dismissible fade show" key={index}>
      {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
   onClick={() => handleRemove(idx.id)}><i className="bi bi-x"></i></Button>
     </Alert>
))} // End Prism Code//`;

export const Colorreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {solidalert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Solidalerts.map((idx, index) => (
    <SpkAlert show={alert["solid#{index}"]} variant={idx.class} key={index} CustomClass={"alert-dismissible #{idx.color}"}>{idx.text}
        <SpkButton Buttonvariant="" Buttontype="button" Buttonlabel="Close" Buttondismiss="alert" Customclass={"btn-close #{idx.color}"}
            onClickfunc={() => handleRemoveAlert("solid#{index}")}><i className="bi bi-x"></i></SpkButton>
    </SpkAlert>
))}// End Prism Code//`;

export const Rounddataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert1 {
	id: number
	text: string
	class: string
}
export const Roundedsolidalerts: alert1[] = [
	{ id: 1, text: "A simple solid rounded primary alert—check it out! ", class: "solid-primary" },
	{ id: 2, text: "A simple solid rounded primary1 alert—check it out! ", class: "solid-primary1" },
	{ id: 3, text: "A simple solid rounded primary2 alert—check it out! ", class: "solid-primary2" },
	{ id: 4, text: "A simple solid rounded primary3 alert—check it out! ", class: "solid-primary3" },
	{ id: 5, text: "A simple solid rounded secondary alert—check it out! ", class: "solid-secondary" },
	{ id: 6, text: "A simple solid rounded warning alert—check it out! ", class: "solid-warning" },
	{ id: 7, text: "A simple solid rounded danger alert—check it out!", class: "solid-danger" }
]; // End Prism Code//`

export const Roundalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {roundedsolidalert} from "@/shared/data/ui-elements/alertsdata";

{roundedsolidalert.map((idx,alt7)=>(
        <Alert variant={idx.class} className="alert  rounded-pill alert-dismissible fade show" key={alt7}>
           {idx.text}
            <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
             onClick={() => handleRemove3(idx.id)}>
                <i className="bi bi-x"></i></Button>
        </Alert>
        ))} // End Prism Code//`;

export const Roundreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {roundedsolidalert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};
{Roundedoutlinealerts.map((idx, index) => (
    <SpkAlert show={alert["round#{index}"]} variant={idx.class} key={index} CustomClass="rounded-pill alert-dismissible">{idx.text}
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Buttonlabel="Close" Buttondismiss="alert" Customclass="btn-close"
            onClickfunc={() => handleRemoveAlert("round#{index}")}><i className="bi bi-x"></i></SpkButton>
    </SpkAlert>
))} // End Prism Code//`;


export const Roundoutlinedata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface alert1 {
        text: string
        class: string
        id: number
    }
    export const Roundedoutlinealerts: alert1[] = [
        { id: 1, text: "A simple outline rounded primary alert—check it out! ", class: "outline-primary" },
        { id: 2, text: "A simple outline rounded primary1 alert—check it out! ", class: "outline-primary1" },
        { id: 3, text: "A simple outline rounded primary2 alert—check it out! ", class: "outline-primary2" },
        { id: 4, text: "A simple outline rounded primary3 alert—check it out! ", class: "outline-primary3" },
        { id: 5, text: "A simple outline rounded secondary alert—check it out! ", class: "outline-secondary" },
        { id: 6, text: "A simple outline rounded warning alert—check it out! ", class: "outline-warning" },
        { id: 7, text: "A simple outline rounded danger alert—check it out!", class: "outline-danger" }
    ]; // End Prism Code//`

export const Roundoutline = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {roundedoutlinealert} from "@/shared/data/ui-elements/alertsdata";

{roundedoutlinealert.map((idx,index) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={index}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove4(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert>
    ))} // End Prism Code//`;

export const Roundreuseoutline = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {roundedoutlinealert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Roundedoutlinealerts.map((idx, index) => (
    <SpkAlert show={alert["rounded#{index}"]} variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={index}>
        {idx.text}
        <SpkButton  Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("rounded#{index}")}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))}// End Prism Code//`;

export const Roundefaultdata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert1 {
    text: string
    class: string
    id: number
}
export const Roundedefaultalerts: alert1[] = [
	{ id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
	{ id: 2, text: "A simple rounded primary1 alert—check it out! ", class: "primary1" },
	{ id: 3, text: "A simple rounded primary2 alert—check it out! ", class: "primary2" },
	{ id: 4, text: "A simple rounded primary3 alert—check it out! ", class: "primary3" },
	{ id: 5, text: "A simple rounded secondary alert—check it out! ", class: "secondary" },
	{ id: 6, text: "A simple rounded warning alert—check it out! ", class: "warning" },
	{ id: 7, text: "A simple rounded danger alert—check it out!", class: "danger" }
]; // End Prism Code//`

export const Roundefault = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {roundeddefaultalert} from "@/shared/data/ui-elements/alertsdata";

{roundeddefaultalert.map((idx,index) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={index}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove5(idx.id)}
        ><i className="bi bi-x"></i></Button>
    </Alert>
    ))} // End Prism Code//`;

export const Roundefaultreuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {roundeddefaultalert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Roundedefaultalerts.map((idx, index) => (
    <SpkAlert show={alert["default#{index}"]} variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={index}>
        {idx.text}
        <SpkButton Buttonvariant="" onClickfunc={() => handleRemoveAlert("default#{index}")} Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert">
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`;

export const Customedataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert1 {
    text: string
    class: string
    id: number
}
];
export const Roundewithbtnalerts: alert1[] = [
	{ id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
	{ id: 2, text: "A simple rounded secondary alert—check it out! ", class: "secondary" },
	{ id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
	{ id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
]; // End Prism Code//`

export const Customalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {roundedwithbtnalert} from "@/shared/data/ui-elements/alertsdata";

{roundedwithbtnalert.map((idx,index) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible 
    custom-rounded-alerts fade show" key={index}>
        {idx.text}
        <Button variant='' type="button" className="btn-close custom-close" 
        data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove6(idx.id)}>
            <i className="bi bi-x"></i></Button>
    </Alert>
    ))} // End Prism Code//`;

export const Customreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {roundedwithbtnalert} from "@/shared/data/ui-elements/alertsdata";
//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Roundewithbtnalerts.map((idx, index) => (
    <SpkAlert show={alert["close#{index}"]} variant={idx.class} CustomClass="rounded-pill alert-dismissible custom-rounded-alerts" key={index}>
        {idx.text}
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close custom-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("close#{index}")}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`;

export const Svgdatalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert6 {
	id: number
	class1: string
	color: string
}
export const Customizedalert1: alert6[] = [
	{ id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", color: "primary" },
	{ id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: "secondary", },
	{ id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", color: "warning", },
	{ id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", color: "danger", },
]; // End Prism Code//`

export const Svgalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert} from "react-bootstrap";
import {roundedwithbtnalert} from "@/shared/data/ui-elements/alertsdata";

//Customized Alerts With SVG's
const [customized1alert, setcustomized1alert] = useState(Customizedalert1);
const handleRemove12 = (id) => {
    const newList = customized1alert.filter((list) => list.id !== id);
    setcustomized1alert(newList);
};

{customized1alert.map((idx,index) => (
    <Alert variant={idx.color} className={'alert alert-dismissible fade show custom-alert-icon shadow-sm svg-&#36;{idx.color}'} role="alert" key={index}>
        <svg className={'me-2 svg-&#36;{idx.color}'} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
        A customized {idx.color} alert with an icon
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove12(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert>
))} // End Prism Code//`;

export const Svgreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {roundedwithbtnalert} from "@/shared/data/ui-elements/alertsdata";

//
const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Customizedalert1.map((idx,index) => (
    <SpkAlert show={alert["svg#{index}"]} variant={idx.color} CustomClass={"alert-dismissible custom-alert-icon shadow-sm svg-#{idx.color}"} key={index}>
        <svg className={"me-2 svg-#{idx.color}"} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
        A customized {idx.color} alert with an icon
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("svg#{index}")}>
            <i className="bi bi-x"></i>
        </SpkButton>
    </SpkAlert>
))}// End Prism Code//`;

export const Iconslaert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import {Alert} from "react-bootstrap";

<Alert variant='primary' className="alert d-flex align-items-center svg-primary alert-primary" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
<div>
    An example alert with an icon
</div>
</Alert>
<Alert variant='success' className="alert  d-flex align-items-center svg-success" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
<div>
    An example success alert with an icon
</div>
</Alert>
<Alert variant='warning' className="alert  d-flex align-items-center svg-warning" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>
<div>
    An example warning alert with an icon
</div>
</Alert>
<Alert variant='danger' className="alert  d-flex align-items-center svg-danger" role="alert">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>
<div>
    An example danger alert with an icon
</div>
</Alert> // End Prism Code//`;

export const Iconsreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";

 <SpkAlert variant="primary"CustomClass="d-flex align-items-center svg-primary">
    <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
    <div>
        An example alert with an icon
    </div>
</SpkAlert>
<SpkAlert variant="success" CustomClass="d-flex align-items-center svg-success">
    <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
<div>
    An example success alert with an icon
</div>
</SpkAlert>
<SpkAlert variant="warning" CustomClass="d-flex align-items-center svg-warning">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>
<div>
    An example warning alert with an icon
</div>
</SpkAlert>
<SpkAlert variant='danger' CustomClass=" d-flex align-items-center svg-danger">
<svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>
<div>
    An example danger alert with an icon
</div>
</SpkAlert> // End Prism Code//`;

export const Imagesdatalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert7 {
	id: number
	src1: string
	color: string
	class: string
}
export const Imagealerts: alert7[] = [
	{ id: 1, src1: "../../assets/images/faces/3.jpg", color: "primary", class: "" },
	{ id: 1, src1: "../../assets/images/faces/9.jpg", color: "primary1", class: "" },
	{ id: 1, src1: "../../assets/images/faces/12.jpg", color: "primary2", class: "" },
	{ id: 1, src1: "../../assets/images/faces/15.jpg", color: "primary3", class: "" },
	{ id: 2, src1: "../../assets/images/faces/5.jpg", color: "secondary", class: "" },
	{ id: 3, src1: "../../assets/images/faces/8.jpg", color: "warning", class: "" },
	{ id: 4, src1: "../../assets/images/faces/11.jpg", color: "danger", class: "" },
	{ id: 5, src1: "../../assets/images/faces/13.jpg", color: "info", class: "" },
	{ id: 6, src1: "../../assets/images/faces/10.jpg", color: "light", class: "" },
	{ id: 7, src1: "../../assets/images/faces/15.jpg", color: "dark", class: "text-muted" },
]; // End Prism Code//`

export const Imagesalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Imagealerts} from "@/shared/data/ui-elements/alertsdata";

const [imagesalert, setimagesalert] = useState(Imagealerts);
const handleRemove8 = (id) => {
    const newList = imagesalert.filter((list) => list.id !== id);
    setimagesalert(newList);
};

{imagesalert.map((idx)=>(
                <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={index}>
                    <div className="avatar avatar-sm me-3 avatar-rounded">
                        <Image width={28} height={28} src={idx.src1} alt="img"/>
                    </div>
                    <div>A simple {idx.color} alert with image—check it out!</div>
                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove8(idx.id)}
                    ><i className="bi bi-x"></i></Button>
                </Alert>
))} // End Prism Code//`;

export const Imagesreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {Imagealerts} from "@/shared/data/ui-elements/alertsdata";

const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{Imagealerts.map((idx, index) => (
    <SpkAlert show={alert["images#{index}"]} variant={idx.color} CustomClass="alert-img alert-dismissible rounded-pill flex-wrap" key={index}>
        <div className="avatar avatar-sm me-3 avatar-rounded">
            <Image width={28} height={28} src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("images#{index}")}>
            <i className={"bi bi-x  #{idx.class}"}></i>
        </SpkButton>
    </SpkAlert>
))} // End Prism Code//`;

export const Diffdataalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert8 {
	id: number
	src1: string
	color: string
	class: string
	class1: string
}
export const avatarsizealert: alert8[] = [
	{ id: 1, src1: "../../assets/images/faces/3.jpg", color: "primary", class: "xs", class1: "" },
	{ id: 1, src1: "../../assets/images/faces/3.jpg", color: "primary1", class: "xs", class1: "" },
	{ id: 1, src1: "../../assets/images/faces/3.jpg", color: "primary2", class: "xs", class1: "" },
	{ id: 1, src1: "../../assets/images/faces/3.jpg", color: "primary3", class: "xs", class1: "" },
	{ id: 2, src1: "../../assets/images/faces/5.jpg", color: "secondary", class: "sm", class1: "" },
	{ id: 3, src1: "../../assets/images/faces/8.jpg", color: "warning", class: "", class1: "" },
	{ id: 4, src1: "../../assets/images/faces/11.jpg", color: "danger", class: "md", class1: "" },
	{ id: 5, src1: "../../assets/images/faces/13.jpg", color: "info", class: "lg", class1: "" },
	{ id: 6, src1: "../../assets/images/faces/14.jpg", color: "dark", class: "xl", class1: "text-muted" },
]; // End Prism Code//`

export const Diffalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

import {Alert} from "react-bootstrap";
import {avatarsizealert} from "@/shared/data/ui-elements/alertsdata";

const [avataralert, setavataralert] = useState(avatarsizealert);
const handleRemove9 = (id) => {
    const newList = avataralert.filter((list) => list.id !== id);
    setavataralert(newList);
};

{avataralert.map((idx,index) => (
    <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show flex-wrap" role="alert" key={index}>
        <div className={'avatar avatar-&#{idx.class} me-3'}>
            <Image width={idx.width} height={idx.height} src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
            aria-label="Close" onClick={() => handleRemove9(idx.id)}><i className={'bi bi-x &#{idx.class1}'}></i></Button>
    </Alert>
))} // End Prism Code//`;

export const Diffreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {avatarsizealert} from "@/shared/data/ui-elements/alertsdata";

const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

{avatarsizealert.map((idx, index) => (
    <SpkAlert show={alert["different#{index}"]} variant={idx.color} CustomClass="alert-img alert-dismissible flex-wrap" key={index}>
        <div className={"avatar avatar-#{idx.class} me-3"}>
            <Image width={idx.width} height={idx.height} src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("different#{index}")}>
            <i className={"bi bi-x #{idx.class1}"}></i>
        </SpkButton>
    </SpkAlert>
))}// End Prism Code//`;

export const Contentdatalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alert10 {
	id: number
	class: string
	text1: string
	text2: string
	text3: string
}
export const Additionalcontentalerts: alert10[] = [
	{ id: 1, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary" },
	{ id: 2, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "secondary" },
	{ id: 3, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "success" },
	{ id: 4, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "warning" }
]; // End Prism Code//`

export const Contentalert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {Alert} from "react-bootstrap";
import {Additionalcontentalerts} from "@/shared/data/ui-elements/alertsdata";

{Additionalcontentalerts.map((idx,index) => (
    <Col xl={6} key={index}>
        <Alert variant={idx.class} className="overflow-hidden p-0" role="alert">
            <div className={'p-3 bg-&#{idx.class} text-fixed-white d-flex justify-content-between'}>
                <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                <Button type="button" variant='' className="btn-close p-0 text-fixed-black"
                    onClick={() => handleRemove7(idx.id)}
                    data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
            </div>
            <hr className="my-0" />
            <div className="p-3">
                <p className="mb-0">{idx.text2} <Link href="#!" className="fw-semibold text-decoration-underline">
                    {idx.text3}</Link></p>
            </div>
        </Alert>
    </Col>
))} // End Prism Code//`;

export const Contentreusealert = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkAlert from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-alert";
import {Additionalcontentalerts} from "@/shared/data/ui-elements/alertsdata";

const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

const handleRemoveAlert = (alertName: string) => {
    setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
};

<div className="row gy-3">
{Additionalcontentalerts.map((idx, index) => (
    <Col xl={6} key={index}>
        <SpkAlert show={alert["additional#{index}"]} variant={idx.class} CustomClass="overflow-hidden p-0" key={index}>
            <div className={"p-3 bg-#{idx.class} text-fixed-white d-flex justify-content-between"}>
                <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close p-0 text-fixed-white" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert("additional#{index}")}>
                    <i className="bi bi-x"></i>
                </SpkButton>
            </div>
            <hr className="my-0" />
            <div className="p-3">
                <p className="mb-0">{idx.text2} <Link href="#!" className="fw-semibold text-decoration-underline">
                    {idx.text3}</Link></p>
            </div>
        </SpkAlert>
    </Col>
))}
</div> // End Prism Code//`;

///Badges

export const Basicbadgedata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface badge {
	id: number
	heading: string
	color: string
	class: string
}

export const badgesdata: badge[] = [
	{ id: 1, heading: "Primary", color: "primary", class: "" },
	{ id: 2, heading: "secondary", color: "secondary", class: "" },
	{ id: 3, heading: "Success", color: "success", class: "" },
	{ id: 4, heading: "Danger", color: "danger", class: "" },
	{ id: 5, heading: "Warning", color: "warning", class: "" },
	{ id: 6, heading: "Info", color: "info", class: "" },
	{ id: 7, heading: "Light", color: "light", class: "text-dark" },
	{ id: 8, heading: "Dark", color: "dark", class: "text-white" },
]; // End Prism Code//`

export const Basicbadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 	
import {badgesdata} from "@/shared/data/ui-elements/badgesdata";
import {badge} from ""react-bootstrap;

{badgesdata.map((badge) => (
    <Badge key={index} bg={badge.color} className={'badge bg-&#{badge.color} &#{badge.class}'}>{badge.heading}</Badge>
))} // End Prism Code//`;

export const Basicreusebadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 	
import {badgesdata} from "@/shared/data/ui-elements/badgesdata";
import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";

{badgesdata.map((badge) => (
        <SpkBadge key={index} variant={badge.color} Customclass={'bg-&#{badge.color} &#{badge.class}'}>{badge.heading}</SpkBadge>
    ))} // End Prism Code//`;

export const Lightbadgedata = `
    //<!-- Prism Code: This code is only used for showcode purpose -->//
    interface outlinebadge {
        id: number
        heading: string
        color: string
        class: string
    }
    export const Outlinebadgesdata: outlinebadge[] = [
        { id: 1, heading: "Primary", color: "primary", class: "" },
        { id: 2, heading: "secondary", color: "secondary", class: "" },
        { id: 3, heading: "Success", color: "success", class: "" },
        { id: 4, heading: "Danger", color: "danger", class: "" },
        { id: 5, heading: "Warning", color: "warning", class: "" },
        { id: 6, heading: "Info", color: "info", class: "" },
        { id: 7, heading: "Light", color: "light", class: "text-dark" },
        { id: 8, heading: "Dark", color: "dark", class: "" },
    ]; // End Prism Code//`

export const Lightbadge = `
    //<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Outlinebadgesdata} from "@/shared/data/ui-elements/badgesdata";
    import {badge} from ""react-bootstrap;
    
    {Outlinebadgesdata.map((badge) => (
        <Badge key={index} bg={badge.color} className={'badge bg-&#{badge.color}-transparent &#{badge.class}'}>{badge.heading}</Badge>
    ))} // End Prism Code//`;

export const Lightreusebadge = `
    //<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Outlinebadgesdata} from "@/shared/data/ui-elements/badgesdata";
    import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
    
    {Outlinebadgesdata.map((badge) => (
        <SpkBadge key={index} variant={badge.color} Customclass={'bg-&#{badge.color}-transparent &#{badge.class}'}>{badge.heading}</SpkBadge>
    ))}// End Prism Code//`;

export const Pillbadgedata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface badge {
	id: number
	heading: string
	color: string
	class: string
}

export const badgesdata: badge[] = [
	{ id: 1, heading: "Primary", color: "primary", class: "" },
	{ id: 2, heading: "secondary", color: "secondary", class: "" },
	{ id: 3, heading: "Success", color: "success", class: "" },
	{ id: 4, heading: "Danger", color: "danger", class: "" },
	{ id: 5, heading: "Warning", color: "warning", class: "" },
	{ id: 6, heading: "Info", color: "info", class: "" },
	{ id: 7, heading: "Light", color: "light", class: "text-dark" },
	{ id: 8, heading: "Dark", color: "dark", class: "text-white" },
]; // End Prism Code//`

export const Pillbadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{badgesdata.map((badge) => (
    <Badge key={index} bg={badge.color} className={'badge bg-&#{badge.color} &#{badge.class} rounded-pill'}>{badge.heading}</Badge>
))} // End Prism Code//`;

export const Pillreusebadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{badgesdata.map((badge) => (
    <SpkBadge key={index} variant={badge.color} Pill={true} Customclass={badge.class}>{badge.heading}</SpkBadge>
))} // End Prism Code//`;

export const Lightpilldata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface outlinebadge {
	id: number
	heading: string
	color: string
	class: string
}
export const Outlinebadgesdata: outlinebadge[] = [
	{ id: 1, heading: "Primary", color: "primary", class: "" },
	{ id: 2, heading: "secondary", color: "secondary", class: "" },
	{ id: 3, heading: "Success", color: "success", class: "" },
	{ id: 4, heading: "Danger", color: "danger", class: "" },
	{ id: 5, heading: "Warning", color: "warning", class: "" },
	{ id: 6, heading: "Info", color: "info", class: "" },
	{ id: 7, heading: "Light", color: "light", class: "text-dark" },
	{ id: 8, heading: "Dark", color: "dark", class: "" },
]; // End Prism Code//`

export const Lightpill = `
//<!-- Prism Code: This code is only used for showcode purpose -->//	{Outlinebadgesdata.map((badge) => (
    <Badge key={index} bg={badge.color} className={'badge bg-&#{badge.color}-transparent &#{badge.class} rounded-pill'}>{badge.heading}</Badge>
))} // End Prism Code//`;

export const Lightpillreuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//	{Outlinebadgesdata.map((badge) => (
<SpkBadge key={index} variant={badge.color} Pill={true} Customclass={'bg-&#{badge.color}-transparent &#{badge.class}'}>{badge.heading}</SpkBadge>
))}// End Prism Code//`;

export const Gradientbadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {badgesdata} from "@/shared/data/ui-elements/badgesdata";
import {badge} from ""react-bootstrap;

{badges1.map((badge1) => (
    <Badge key={index} className={'bg-&#{badge1.color}-gradient'}>{badge1.heading}</Badge>
))} // End Prism Code//`;

export const Gradientreuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import {badgesdata} from "@/shared/data/ui-elements/badgesdata";
import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";

{badges1.map((badge1) => (
    <SpkBadge key={index} Customclass={ bg-&#{badge1.color}-gradient}>{badge1.heading}</SpkBadge>
))} // End Prism Code//`;

export const Gradientdata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface badge1 {
	id: number
	heading: string
	color: string
}
export const badges1: badge1[] = [
	{ id: 1, heading: "Primary", color: "primary" },
	{ id: 2, heading: "secondary", color: "secondary" },
	{ id: 3, heading: "Success", color: "success" },
	{ id: 4, heading: "Danger", color: "danger" },
	{ id: 5, heading: "Warning", color: "warning" },
	{ id: 6, heading: "Info", color: "info" },
	{ id: 7, heading: "orange", color: "orange" },
	{ id: 8, heading: "purple", color: "purple" },
]; // End Prism Code//`

export const Gradientpill = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{badges1.map((badge1) => (
    <Badge key={index} className={'bg-&#{badge1.color}-gradient rounded-pill'}>{badge1.heading}</Badge>
))} // End Prism Code//`;

export const Gradientpillreuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{badges1.map((badge1) => (
    <SpkBadge key={index} Customclass={bg-&#{badge1.color}-gradient} Pill={true}>{badge1.heading}</SpkBadge>
))} // End Prism Code//`;

export const Outlinebadgedata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface outlinebadge {
	id: number
	heading: string
	color: string
	class: string
}
export const Outlinebadgesdata: outlinebadge[] = [
	{ id: 1, heading: "Primary", color: "primary", class: "" },
	{ id: 2, heading: "secondary", color: "secondary", class: "" },
	{ id: 3, heading: "Success", color: "success", class: "" },
	{ id: 4, heading: "Danger", color: "danger", class: "" },
	{ id: 5, heading: "Warning", color: "warning", class: "" },
	{ id: 6, heading: "Info", color: "info", class: "" },
	{ id: 7, heading: "Light", color: "light", class: "text-dark" },
	{ id: 8, heading: "Dark", color: "dark", class: "" },
]; // End Prism Code//`

export const Outlinebadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge) => (
    <Badge key={index} bg={'outline-&#{badge.color}'} className={'badge outline-&#{badge.color}-transparent &#{badge.class}'}>{badge.heading}</Badge>
))} // End Prism Code//`;

export const Outlinereusebadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge) => (
    <SpkBadge key={index} variant={'outline-&#{badge.color}'} Customclass={badge.class}>{badge.heading}</SpkBadge>
))} // End Prism Code//`;

export const Badgepill = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge) => (
    <Badge key={index} bg={'outline-&#{badge.color}'} className={'badge outline-&#{badge.color}-transparent &#{badge.class} rounded-pill'}>{badge.heading}</Badge>
))} // End Prism Code//`;

export const Badgepillreuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{Outlinebadgesdata.map((badge) => (
    <SpkBadge key={index} variant={'outline-&#{badge.color}'} Pill={true} Customclass={badge.class}>{badge.heading}</SpkBadge>
))} // End Prism Code//`;

export const Buttonbadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
<SpkButton variant='secondary' type="button" className="my-1 me-2">
Notifications <Badge bg="primary" className=" ms-2 text-white">7</Badge>
</SpkButton>
<SpkButton variant='success' type="button" className="my-1 me-2">
Notifications <Badge bg="danger" className=" ms-2 text-white">12</Badge>
</SpkButton>
<SpkButton variant='info' type="button" className="my-1 me-2">
Notifications <Badge bg="warning" className=" ms-2 text-white">32</Badge>
</SpkButton> // End Prism Code//`;

export const Buttonbadgereuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="primary" Customclass=" ms-2 text-fixed-white">4</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="primary" Customclass=" ms-2 text-fixed-white">7</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='success' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="danger" Customclass=" ms-2 text-fixed-white">12</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='info' Buttontype="button" Customclass="my-1 me-2">
    Notifications <SpkBadge variant="warning" Customclass=" ms-2 text-fixed-white">32</SpkBadge>
</SpkButton> // End Prism Code//`;

export const Buttonbadgeoutlinedata = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<SpkButton variant='outline-primary' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">4</Badge>
</SpkButton>
<SpkButton variant='outline-secondary' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">7</Badge>
</SpkButton>
<SpkButton variant='outline-success' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">12</Badge>
</SpkButton>
<SpkButton variant='outline-info' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">32</Badge>
</SpkButton> // End Prism Code//`;

export const Buttonoulinebadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<SpkButton Buttonvariant='outline-primary' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">4</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='outline-secondary' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">7</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='outline-success' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">12</SpkBadge>
</SpkButton>
<SpkButton Buttonvariant='outline-info' Buttontype="button" Customclass="btn  my-1 me-2">
    Notifications <SpkBadge variant="" Customclass="ms-2">32</SpkBadge>
</SpkButton> // End Prism Code//`;

export const Positionbadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    import {Button} from ""react-bootstrap;
    
    <SpkButton type="button" className="btn  position-relative">
    Inbox
    <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
        99+
        <span className="visually-hidden">unread messages</span>
    </span>
    </SpkButton>
    <SpkButton variant='secondary' type="button" className="position-relative">
    Profile
    <span
        className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
    </SpkButton>
    <span className="avatar">
    <Image fill src="../../assets/images/faces/2.jpg" alt="img" />
    <span
        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
    </span>
    <span className="avatar avatar-rounded">
    <Image fill src="../../assets/images/faces/15.jpg" alt="img" />
    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light  rounded-pill">
        <span className="visually-hidden">New alerts</span>
    </span>
    </span>
    <span className="avatar avatar-rounded">
    <Image fill src="../../assets/images/faces/10.jpg" alt="img" />
    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
        <span className="visually-hidden">New alerts</span>
    </span>
    </span> // End Prism Code//`;

export const Positionreusebadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<SpkButton Buttontype="button" Customclass="position-relative">
    Inbox
    <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
        99+
        <span className="visually-hidden">unread messages</span>
    </span>
</SpkButton>
<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="position-relative">
    Profile
    <span
        className="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</SpkButton>
<span className="avatar">
    <Image fill src="../../assets/images/faces/2.jpg" alt="img" />
    <span
        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<span className="avatar avatar-rounded">
    <Image fill src="../../assets/images/faces/15.jpg" alt="img" />
    <span className="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light  rounded-pill">
        <span className="visually-hidden">New alerts</span>
    </span>
</span>
<span className="avatar avatar-rounded">
    <Image fill src="../../assets/images/faces/10.jpg" alt="img" />
    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
        <span className="visually-hidden">New alerts</span>
    </span>
</span>// End Prism Code//`;

export const Custombadges = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
<p className="mb-xxl-0 badge bg-outline-info custom-badge fs-15 me-5">
<i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
<p className="mb-xxl-0 badge bg-success custom-badge fs-15 me-5">
<i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
<p className="mb-xxl-0 icon-badge me-5">
<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px"
 viewBox="0 0 24 24" width="24px" fill="#000000">
 <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.
 5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
<span className="badge rounded-pill bg-success">14</span>
</p>
<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
<p className="mb-xxl-0 text-badge me-5">
<span className="text fs-18">Inbox</span>
<Badge className="badge rounded-pill bg-success">32</Badge>
</p> // End Prism Code//`;

export const Custombadgesreuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
	<p className="mb-xxl-0 badge bg-outline-secondary custom-badge fs-15 me-5">
    <i className="ti ti-flame me-1 me-1 d-inline-flex"></i>Hot</p>
<p className="mb-xxl-0 icon-badge me-5">
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
    <span className="badge rounded-pill bg-success">14</span>
</p>
<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
<p className="mb-xxl-0 text-badge me-5">
    <span className="text fs-18">Inbox</span>
    <SpkBadge variant="success" Pill={true}>32</SpkBadge>
</p> // End Prism Code//`;

export const Headingbadge = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
<h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
<h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
<h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
<h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
<h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6> // End Prism Code//`;

export const Headingbadgereuse = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<h1>Example heading <SpkBadge variant="primary">New</SpkBadge></h1>
<h2>Example heading <SpkBadge variant="primary">New</SpkBadge></h2>
<h3>Example heading <SpkBadge variant="primary">New</SpkBadge></h3>
<h4>Example heading <SpkBadge variant="primary">New</SpkBadge></h4>
<h5>Example heading <SpkBadge variant="primary">New</SpkBadge></h5>
<h6>Example heading <SpkBadge variant="primary">New</SpkBadge></h6>// End Prism Code//`;















// Breadcrumb
export const breadcrumb1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<Breadcrumb>
    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
</Breadcrumb>
</nav>
<nav aria-label="breadcrumb">
<Breadcrumb>
    <Breadcrumb.Item href="#!" scroll={false}>Home</Breadcrumb.Item>
    <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
</Breadcrumb>
</nav>
<nav aria-label="breadcrumb"><Breadcrumb className="mb-0">
    <Breadcrumb.Item href="#!" scroll={false}>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#!" scroll={false}>Library</Breadcrumb.Item>
    <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
</Breadcrumb>
</nav> // End Prism Code//`;

export const reusebreadcrumb1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<SpkBreadcrumb>
    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
</SpkBreadcrumb>

<nav aria-label="breadcrumb">
    <SpkBreadcrumb>
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
    </SpkBreadcrumb>
</nav>

<nav aria-label="breadcrumb">
    <SpkBreadcrumb Customclass="mb-0 custom-breadcrumb">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
    </SpkBreadcrumb>
</nav>
 // End Prism Code//`;

export const reusebreadcrumb2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
 <SpkBreadcrumb Customclass="breadcrumb-example1">
     <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
 </SpkBreadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <SpkBreadcrumb Customclass="breadcrumb-example1">
     <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
 </SpkBreadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <SpkBreadcrumb Customclass="breadcrumb-example1 breadcrumb-second mb-0">
     <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
     <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
 </SpkBreadcrumb>
 </nav> // End Prism Code//`;

export const breadcrumb2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb-example1">
     <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
 </Breadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb-example1">
     <Breadcrumb.Item href="#!" scroll={false}>Home</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
 </Breadcrumb>
 </nav>
 
 <nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb-example1 mb-0">
     <Breadcrumb.Item href="#!" scroll={false}>Home</Breadcrumb.Item>
     <Breadcrumb.Item href="#!" scroll={false}>Library</Breadcrumb.Item>
     <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
 </Breadcrumb>
 </nav> // End Prism Code//`;

export const breadcrumb3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav 
 aria-label="breadcrumb">
    <Breadcrumb className="mb-0">
        <Breadcrumb.Item><a href="#!" scroll={false}>Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav> // End Prism Code//`;

export const reusebreadcrumb3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav aria-label="breadcrumb">
    <SpkBreadcrumb Customclass="breadcrumb-style1 breadcrumb-second mb-0">
        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
    </SpkBreadcrumb>
</nav> // End Prism Code//`;

export const breadcrumb4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav
 aria-label="breadcrumb" className='svg-breadcrumb'>
 <Breadcrumb className=" mb-0">
     <Breadcrumb.Item href="#!" scroll={false}>Home</Breadcrumb.Item>
     <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
 </Breadcrumb>
</nav> // End Prism Code//`;

export const reusebreadcrumb4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<SpkBreadcrumb Customclass="breadcrumb-style2 breadcrumb-second mb-0">
    <Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</SpkBreadcrumb>
</nav> // End Prism Code//`;

export const breadcrumb5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
    <Breadcrumb.Item href="#!" scroll={false}>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#!" scroll={false}>Library</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
</Breadcrumb>
</nav> // End Prism Code//`;

export const reusebreadcrumb5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <nav
aria-label="breadcrumb" className='divider-breadcrumb'>
<SpkBreadcrumb Customclass="breadcrumb-second mb-0">
    <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
</SpkBreadcrumb>
</nav>// End Prism Code//`;

export const breadcrumb6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
    <Breadcrumb.Item href="#!" scroll={false}><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#!" scroll={false}><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</Breadcrumb>
</nav> // End Prism Code//`;


export const reusebreadcrumb6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<nav aria-label="breadcrumb">
<nav
aria-label="breadcrumb" className='svg-breadcrumb'>
<SpkBreadcrumb Customclass="breadcrumb-second mb-0">
    <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
    <Breadcrumb.Item active className="active " aria-current="page">Library</Breadcrumb.Item>
</SpkBreadcrumb>
</nav>// End Prism Code//`;



// end Breadcrumb

//Buttongroup
export const btngroup1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group" role="group" aria-label="Basic example">
<SpkButton variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-backward"></i></SpkButton>
<SpkButton variant="info" type="button" className="btn btn-wave"><i className="bi bi-pause"></i></SpkButton>
<SpkButton variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-forward"></i></SpkButton>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

<SpkButtongroup Buttongrplabel="Basic example">
    <SpkButton Buttonvariant="info" Buttontype="button"><i className="bi bi-skip-backward"></i></SpkButton>
    <SpkButton Buttonvariant="info" Buttontype="button"><i className="bi bi-pause"></i></SpkButton>
    <SpkButton Buttonvariant="info" Buttontype="button"><i className="bi bi-skip-forward"></i></SpkButton>
</SpkButtongroup> // End Prism Code//`;

export const btngroup2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
<input type="checkbox" className="btn-check" id="btncheck1" />
<label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

<input type="checkbox" className="btn-check" id="btncheck2" />
<label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

<input type="checkbox" className="btn-check" id="btncheck3" />
<label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

<SpkButtongroup Buttongrplabel="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" id="btncheck1" />
    <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

    <input type="checkbox" className="btn-check" id="btncheck2" />
    <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

    <input type="checkbox" className="btn-check" id="btncheck3" />
    <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</SpkButtongroup> // End Prism Code//`;

export const btngroup3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group">
<SpkButton variant='primary' active href="#" className="btn  active btn-wave" aria-current="page">Active
    link</SpkButton>
<SpkButton variant='primary' href="#" className="btn">Link</SpkButton>
<SpkButton variant='primary' href="#" className="btn ">Link</SpkButton>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

<SpkButtongroup>
    <SpkButton Buttonvariant='primary' Active={true} Navigate="#" >Active link</SpkButton>
    <SpkButton Buttonvariant='primary' Navigate="#">Link</SpkButton>
    <SpkButton Buttonvariant='primary' Navigate="#" >Link</SpkButton>
</SpkButtongroup>// End Prism Code//`;

export const btngroup4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group1" role="group" aria-label="Basic outlined example">
<SpkButton Buttonvariant="outline-primary" Buttontype="button" Customclass="btn btn-wave">Left</SpkButton>
<SpkButton Buttonvariant="outline-primary" Buttontype="button" Customclass="btn btn-wave">Middle</SpkButton>
<SpkButton Buttonvariant="outline-primary" Buttontype="button" Customclass="btn btn-wave">Right</SpkButton>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

 <SpkButtongroup Buttongrplabel="Basic outlined example">
    <SpkButton Buttonvariant="outline-primary" Buttontype="button">Left</SpkButton>
    <SpkButton Buttonvariant="outline-primary" Buttontype="button">Middle</SpkButton>
    <SpkButton Buttonvariant="outline-primary" Buttontype="button">Right</SpkButton>
</SpkButtongroup> // End Prism Code//`;

export const btngroup5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup className="btn-group2" role="group" aria-label="Basic radio toggle button group">
<input type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked />
<label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio2"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio3"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

 <SpkButtongroup  Buttongrplabel="Basic radio toggle button group">
<input type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked />
<label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio2"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio3"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
</SpkButtongroup> // End Prism Code//`;

export const btngroup6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//	<SpkButtonGroup className="btn-group" role="group" aria-label="Basic mixed styles example">
<SpkButton Buttonvariant="danger" Buttontype="button" Customclass="btn btn-wave">Left</SpkButton>
<SpkButton Buttonvariant="warning" Buttontype="button" Customclass="btn btn-wave">Middle</SpkButton>
<SpkButton Buttonvariant="success" Buttontype="button" Customclass="btn btn-wave">Right</SpkButton>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//	<SpkButtongroup  Buttongrplabel="Basic mixed styles example">
<SpkButton Buttonvariant="danger" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="warning" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="success" Buttontype="button">Right</SpkButton>
</SpkButtongroup> // End Prism Code//`;

export const btngroup7 =
    `//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup } from "react-bootstrap";

<SpkButtonGroup vertical role="group" aria-label="Vertical button group">
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<SpkButton variant="primary" type="button" className="btn ">Button</SpkButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
</ButtonGroup>`

export const reusebtngroup7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

 <div className="row gap-2">
    <Col sm={3}>
        <SpkButtongroup Vertical={true}  Buttongrplabel="Vertical button group">
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="primary" Buttontype="button">Button</SpkButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </SpkButtongroup>
    </Col>
    <Col sm={3}>
        <SpkButtongroup Vertical={true} Buttongrplabel="Vertical button group">
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
            <SpkButton Buttonvariant="info" Buttontype="button">Button</SpkButton>
        </SpkButtongroup>
    </Col>
    <Col sm={3}>
        <SpkButtongroup Vertical={true} Buttongrplabel="Vertical radio toggle button group">
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
                defaultChecked />
            <label className="btn btn-outline-primary3" htmlFor="vbtn-radio1">Radio 1</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
            />
            <label className="btn btn-outline-primary3" htmlFor="vbtn-radio2">Radio 2</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
            />
            <label className="btn btn-outline-primary3" htmlFor="vbtn-radio3">Radio 3</label>
        </SpkButtongroup>
    </Col>
</div>`

export const btngroup8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

<SpkButtonToolbar className="mb-4" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
    <SpkButton variant="primary" type="button" className="btn">1</SpkButton>
    <SpkButton variant="primary" type="button" className="btn">2</SpkButton>
    <SpkButton variant="primary" type="button" className="btn">3</SpkButton>
    <SpkButton variant="primary" type="button" className="btn">4</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group me-2 my-1" role="group" aria-label="Second group">
    <SpkButton variant="secondary" type="button" className="btn">5</SpkButton>
    <SpkButton variant="secondary" type="button" className="btn">6</SpkButton>
    <SpkButton variant="secondary" type="button" className="btn">7</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group my-1" role="group" aria-label="Third group">
    <SpkButton variant="info" type="button" className="btn btn-info">8</SpkButton>
</ButtonGroup>
</ButtonToolbar>
<SpkButtonToolbar className="mb-3" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
    <SpkButton variant="outline-secondary" type="button" className="btn">1</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">2</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">3</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">4</SpkButton>
</ButtonGroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon" />
</InputGroup>
</ButtonToolbar>
<SpkButtonToolbar className="justify-content-between" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtonGroup className="btn-group my-1" role="group" aria-label="First group">
    <SpkButton variant="outline-secondary" type="button" className="btn">1</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">2</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">3</SpkButton>
    <SpkButton variant="outline-secondary" type="button" className="btn">4</SpkButton>
</ButtonGroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2" />
</InputGroup>
</ButtonToolbar> // End Prism Code//`;

export const reusebtngroup8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { ButtonToolbar} from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

   <SpkButtonToolbar className="mb-4" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtongroup Customclass="me-2 my-1" Buttongrplabel="First group">
    <SpkButton Buttonvariant="primary" Buttontype="button">1</SpkButton>
    <SpkButton Buttonvariant="primary" Buttontype="button">2</SpkButton>
    <SpkButton Buttonvariant="primary" Buttontype="button">3</SpkButton>
    <SpkButton Buttonvariant="primary" Buttontype="button">4</SpkButton>
</SpkButtongroup>
<SpkButtongroup Customclass="me-2 my-1" Buttongrplabel="Second group">
    <SpkButton Buttonvariant="secondary" Buttontype="button">5</SpkButton>
    <SpkButton Buttonvariant="secondary" Buttontype="button">6</SpkButton>
    <SpkButton Buttonvariant="secondary" Buttontype="button">7</SpkButton>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1" Buttongrplabel="Third group">
    <SpkButton Buttonvariant="info" Buttontype="button">8</SpkButton>
</SpkButtongroup>
</ButtonToolbar>
<SpkButtonToolbar className="mb-3" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtongroup Customclass="me-2 my-1" Buttongrplabel="First group">
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">1</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">2</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">3</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">4</SpkButton>
</SpkButtongroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon" />
</InputGroup>
</ButtonToolbar>
<SpkButtonToolbar className="justify-content-between" role="toolbar"
aria-label="Toolbar with button groups">
<SpkButtongroup Customclass="my-1" Buttongrplabel="First group">
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">1</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">2</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">3</SpkButton>
    <SpkButton Buttonvariant="outline-secondary" Buttontype="button">4</SpkButton>
</SpkButtongroup>
<InputGroup>
    <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
    <Form.Control type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2" />
</InputGroup>
</ButtonToolbar>// End Prism Code//`;

export const btngroup9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup} from "react-bootstrap";

<SpkButtonGroup className="btn-group" role="group"
aria-label="Button group with nested dropdown">
<SpkButton variant="" type="button" className="btn btn-primary">1</SpkButton>
<SpkButton variant="" type="button" className="btn btn-primary">2</SpkButton>

<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

<SpkButtongroup Customclass="" Buttongrplabel="Button group with nested dropdown">
<SpkButton Buttonvariant="primary" Buttontype="button">1</SpkButton>
<SpkButton Buttonvariant="primary" Buttontype="button">2</SpkButton>

<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
</DropdownButton>
</SpkButtongroup> // End Prism Code//`;

export const datagroup10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//interface SocialIcon {
	id: number
	class: string
	class1: string;
}
export const SocialIconButtons: SocialIcon[] = [
	{ id: 1, class: "facebook", class1: "facebook" },
	{ id: 2, class: "twitter-x", class1: "twitter" },
	{ id: 3, class: "instagram", class1: "instagram" },
	{ id: 4, class: "github", class1: "github" },
	{ id: 5, class: "youtube", class1: "youtube" },
	{ id: 5, class: "google", class1: "google" },

]; // End Prism Code//`

export const btngroup10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup} from "react-bootstrap";
import { SocialIconButtons } from "@/shared/data/ui-elements/buttonsdata";

<SpkButtonGroup className="btn-group" role="group" aria-label="Basic example">
{SocialIconButtons.map((idx,index) => (
    <SpkButton variant={idx.class1} className="btn btn-icon btn-wave" key={index}>
        <i className={'ri-&#{idx.class}-line'}></i>
    </SpkButton>
))}
</ButtonGroup> // End Prism Code//`;

export const reusebtngroup10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";
import { SocialIconButtons } from "@/shared/data/ui-elements/buttonsdata";

<SpkButtongroup Buttongrplabel="Basic example">
    {SocialIconButtons.map((idx,index) => (
        <SpkButton Buttonvariant={idx.class1} Customclass="btn-icon" key={index}>
            <i className={'ri-&#{idx.class}-line'}></i>
        </SpkButton>
    ))}
</SpkButtongroup> // End Prism Code//`;


export const btngroup11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button, ButtonGroup} from "react-bootstrap";

<SpkButtonGroup className="btn-group btn-group-lg my-1 me-3" role="group" aria-label="Large button group">
<SpkButton variant="outline-success" type="button" className="btn">Left</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Middle</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Right</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group my-1 me-3" role="group" aria-label="Default button group">
<SpkButton variant="outline-success" type="button" className="btn">Left</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Middle</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Right</SpkButton>
</ButtonGroup>
<SpkButtonGroup className="btn-group btn-group-sm my-1 me-1" role="group" aria-label="Small button group">
<SpkButton variant="outline-success" type="button" className="btn">Left</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Middle</SpkButton>
<SpkButton variant="outline-success" type="button" className="btn">Right</SpkButton>
</ButtonGroup>`

export const reusebtngroup11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkButtongroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttongroup";

 <SpkButtongroup Size="lg" Customclass="my-1 me-3" Buttongrplabel="Large button group">
<SpkButton Buttonvariant="outline-success" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Right</SpkButton>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-3" Buttongrplabel="Default button group">
<SpkButton Buttonvariant="outline-success" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Right</SpkButton>
</SpkButtongroup>
<SpkButtongroup  Size="sm" Customclass="my-1 me-1" Buttongrplabel="Small button group">
<SpkButton Buttonvariant="outline-success" Buttontype="button">Left</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Middle</SpkButton>
<SpkButton Buttonvariant="outline-success" Buttontype="button">Right</SpkButton>
</SpkButtongroup>`

// end Buttongroup

//Buttons

export const dataButton1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const DefaultButtons: buttons1[] = [
	{ id: 1, class: "primary", text: " Primary" },
	{ id: 2, class: "secondary", text: "  Secondary" },
	{ id: 3, class: "success", text: " Success" },
	{ id: 4, class: "danger", text: "  Danger" },
	{ id: 5, class: "warning", text: "  Warning" },
	{ id: 6, class: "info", text: "Info" },
	{ id: 7, class: "light", text: " Light" },
	{ id: 8, class: "dark", text: "  Dark" },
	{ id: 9, class: "link", text: "Link" },
]; // End Prism Code//`

export const reactButton1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

import { Button } from "react-bootstrap";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

{DefaultButtons.map((idx,index) => (
    <SpkButton variant={idx.class} type="button" className="btn-wave waves-effect waves-light me-2"
     key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {DefaultButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="waves-effect waves-light me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`;

export const reactButton2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

{DefaultButtons.map((idx,index) => (
    <SpkButton variant={idx.class} type="button" className="rounded-pill btn-wave me-2" key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {DefaultButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`;

export const databutton1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}

export const LightButtons: buttons1[] = [
	{ id: 1, class: "primary-light", text: " Primary" },
	{ id: 2, class: "secondary-light", text: "  Secondary" },
	{ id: 3, class: "success-light", text: " Success" },
	{ id: 4, class: "danger-light", text: "  Danger" },
	{ id: 5, class: "warning-light", text: "  Warning" },
	{ id: 6, class: "info-light", text: "Info" },
	{ id: 7, class: "purple-light", text: " purple" },
	{ id: 8, class: "teal-light", text: "  teal" },
	{ id: 9, class: "orange-light", text: "orange" }
] // End Prism Code//`;

export const reactbutton1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";

<SpkButton type="button" variant="primary-light" className="me-2">Primary</SpkButton>
<SpkButton type="button" variant="secondary-light" className="me-2">Secondary</SpkButton>
<SpkButton type="button" variant="success-light" className="me-2">Success</SpkButton>
<SpkButton type="button" variant="danger-light" className="me-2">Danger</SpkButton>
<SpkButton type="button" variant="warning-light" className="me-2">Warning</SpkButton>
<SpkButton type="button" variant="info-light" className="me-2">Info</SpkButton>
<SpkButton type="button" variant="purple-light" className="me-2">Purple</SpkButton>
<SpkButton type="button" variant="teal-light" className="me-2">Teal</SpkButton>
<SpkButton type="button" variant="orange-light" className="me-2">Orange</SpkButton>

// End Prism Code//`;
export const reusebutton1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="me-2">Primary</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="me-2">Secondary</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="me-2">Success</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="me-2">Danger</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="warning-light" Customclass="me-2">Warning</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="info-light" Customclass="me-2">Info</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="purple-light" Customclass="me-2">Purple</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="teal-light" Customclass="me-2">Teal</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="orange-light" Customclass="me-2">Orange</SpkButton>
</div>

// End Prism Code//`;



export const dataButton3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const LightButtons: buttons1[] = [
	{ id: 1, class: "primary-light", text: " Primary" },
	{ id: 2, class: "secondary-light", text: "  Secondary" },
	{ id: 3, class: "success-light", text: " Success" },
	{ id: 4, class: "danger-light", text: "  Danger" },
	{ id: 5, class: "warning-light", text: "  Warning" },
	{ id: 6, class: "info-light", text: "Info" },
	{ id: 7, class: "purple-light", text: " purple" },
	{ id: 8, class: "teal-light", text: "  teal" },
	{ id: 9, class: "orange-light", text: "orange" }
]; // End Prism Code//`

export const reactButton3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 

import { Button } from "react-bootstrap";
import {LightButtons } from "@/shared/data/ui-elements/buttonsdata";

{LightButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {LightButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {LightButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`;



export const dataButton5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}

export const OutlineButtons: buttons1[] = [
	{ id: 1, class: "outline-primary", text: " Primary" },
	{ id: 2, class: "outline-secondary", text: "  Secondary" },
	{ id: 3, class: "outline-success", text: " Success" },
	{ id: 4, class: "outline-danger", text: "  Danger" },
	{ id: 5, class: "outline-warning", text: "  Warning" },
	{ id: 6, class: "outline-info", text: "Info" },
	{ id: 7, class: "outline-light", text: " Light" },
	{ id: 8, class: "outline-dark", text: "  Dark" },
]; // End Prism Code//`

export const reactButton5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button } from "react-bootstrap";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

{DefaultButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {DefaultButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {OutlineButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`;

export const reactButton6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button } from "react-bootstrap";
import {OutlineButtons } from "@/shared/data/ui-elements/buttonsdata";

{OutlineButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn rounded-pill btn-wave me-2"
     key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {OutlineButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {OutlineButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass=" rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div>// End Prism Code//`;

export const dataButton7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const GradientButtons: buttons1[] = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "secondary-gradient", text: "Secondary" },
	{ id: 3, class: "success-gradient", text: "Success" },
	{ id: 4, class: "danger-gradient", text: "Danger" },
	{ id: 5, class: "warning-gradient", text: "Warning" },
	{ id: 6, class: "info-gradient", text: "Info" },
	{ id: 7, class: "orange-gradient", text: " Orange" },
	{ id: 8, class: "purple-gradient", text: "Purple" },
	{ id: 9, class: "teal-gradient", text: "  teal" },
]; // End Prism Code//`

export const reactButton7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//  
import { Button } from "react-bootstrap";
import {GradientButtons } from "@/shared/data/ui-elements/buttonsdata";

{GradientButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//  
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {GradientButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {GradientButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div> // End Prism Code//`;

export const dataButton8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const GradientButtons: buttons1[] = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "secondary-gradient", text: "Secondary" },
	{ id: 3, class: "success-gradient", text: "Success" },
	{ id: 4, class: "danger-gradient", text: "Danger" },
	{ id: 5, class: "warning-gradient", text: "Warning" },
	{ id: 6, class: "info-gradient", text: "Info" },
	{ id: 7, class: "orange-gradient", text: " Orange" },
	{ id: 8, class: "purple-gradient", text: "Purple" },
	{ id: 9, class: "teal-gradient", text: "  teal" },
]; // End Prism Code//`

export const reactButton8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";
import {GhostButtons } from "@/shared/data/ui-elements/buttonsdata";

{GradientButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import { GradientButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {GradientButtons.map((idx,index) => (
        <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
    ))}
</div>// End Prism Code//`;

export const dataButton9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface buttons1 {
	id: number
	text: string
	class: string
}
export const GhostButtons: buttons1[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 2, class: "secondary-ghost", text: "Secondary" },
	{ id: 3, class: "success-ghost", text: "Success" },
	{ id: 4, class: "danger-ghost", text: "Danger" },
	{ id: 5, class: "warning-ghost", text: "Warning" },
	{ id: 6, class: "info-ghost", text: "Info" },
	{ id: 5, class: "orange-ghost", text: "orange" },
	{ id: 6, class: "purple-ghost", text: "Purple" },
	{ id: 6, class: "teal-ghost", text: "Teal" },
]; // End Prism Code//`

export const reactButton9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";
import {GhostButtons } from "@/shared/data/ui-elements/buttonsdata";

{GhostButtons.map((idx,index) => (
    <SpkButton type="button" variant={idx.class} className="btn btn-wave me-2" 
    key={index}>{idx.text}</SpkButton>
))} // End Prism Code//`;

export const reuseButton9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
{GhostButtons.map((idx,index) => (
    <SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={index}>{idx.text}</SpkButton>
))}
</div> // End Prism Code//`;

export const reactButton10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button } from "react-bootstrap";

<div className="btn-list">
<SpkButton variant='primary' className="btn  btn-wave" href="#!" scroll={false} role="button">Link</SpkButton>
<SpkButton variant='secondary' className="btn  btn-wave" type="submit">Button</SpkButton>
<SpkButton variant='info' as="input" className="btn " type="button" value="Input" />
<SpkButton variant='warning' as="input" className="btn" type="submit" value="Submit" />
<SpkButton variant='success' as="input" className="btn " type="reset" value="Reset" />
</div> // End Prism Code//`;

export const reuseButton10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<SpkButton Buttontype="button" Buttonvariant="primary" Navigate={"#!"} >Link</SpkButton>
<SpkButton Buttontype="submit" Buttonvariant="secondary" >Button</SpkButton>
<SpkButton as="input" Buttontype="button" Buttonvariant="info"  Value="Input"/>
<SpkButton as="input" Buttontype="submit" Buttonvariant="warning" />
<SpkButton as="input" Buttontype="reset" Buttonvariant="success" />
</div>// End Prism Code//`;

export const reactButton11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<div className="mb-4">
    <SpkButton type="button" variant='primary' className="btn" disabled>Primary
        button</SpkButton>
    <SpkButton type="button" variant='secondary' className="btn" disabled>Button</SpkButton>
    <SpkButton type="button" variant='outline-primary' className="btn b" disabled>Primary
        button</SpkButton>
    <SpkButton type="button" variant='outline-secondary' className="btn " disabled>Button</SpkButton>
</div>

<div>
    <SpkButton variant='primary'disabled className="btn" role="button">Primary
        link</SpkButton>
    <SpkButton variant='secondary' disabled className="btn" role="button">Link</SpkButton>
</div>
</div> // End Prism Code//`;

export const reuseButton11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<div className="mb-4">								
    <SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}> Primary Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}> Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="outline-primary" Disabled={true}>Primary Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="outline-secondary" Disabled={true}>Button</SpkButton>
</div>

<div>
<SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}>Primary Link</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}>Link</SpkButton>
</div> // End Prism Code//`;

export const reactButton12 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<div className="mb-4">
    <SpkButton type="button" variant='primary' className="btn btn-wave"
    >Toggle button</SpkButton>
    <SpkButton type="button" variant='secondary' active className="btn  btn-wave">
        Active toggle button</SpkButton>
    <SpkButton type="button" variant='teal' className="btn btn-wave" disabled>Disabled toggle
        button</SpkButton>
</div>
<div>
    <SpkButton variant='primary' href="#!" scroll={false} className="btn btn-wave" role="button" >Toggle
        link</SpkButton>
    <SpkButton href="#!" scroll={false} variant='secondary' active className="btn btn-wave" role="button">
        Active toggle link</SpkButton>
    <SpkButton variant='teal' className="btn  btn-wave" role="button" disabled>Disabled toggle link</SpkButton>
</div>
</div> // End Prism Code//`;

export const reuseButton12 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<div className="mb-4">
<SpkButton Buttontype="button" Buttonvariant="primary">Toggle button</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary">Active toggle button</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="teal" Disabled={true}>Disabled toggle button</SpkButton>
</div>
<div>
    <SpkButton Buttontype="button" Buttonvariant="primary" Navigate={"#!"}>Toggle link</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="secondary" Navigate={"#!"}>Active toggle link</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="teal" Disabled={true} Navigate={"#!"}>Disabled toggle link</SpkButton>
</div>
</div> // End Prism Code//`;


export const reactButton13 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton variant='primary' disabled className="btn" tabIndex={-1} role="button">Primary link</SpkButton>
<SpkButton variant='secondary' disabled className="btn" tabIndex={-1} role="button">Link</SpkButton>
</div> // End Prism Code//`;

export const reuseButton13 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
    <SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}>Primary link</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}>Link</SpkButton>
</div> // End Prism Code//`;

export const reactButton14 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list d-md-flex flex-wrap">
<SpkButton variant='primary' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>
<SpkButton variant='outline-secondary' className="btn btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>
<SpkButton variant='info-transparent' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
</SpkButton>
<SpkButton variant='warning-transparent' className="btn  btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
</SpkButton>
<SpkButton variant='success' className="btn btn-loader" disabled>
    <span className="me-2">Disabled</span>
    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
</SpkButton>
</div> // End Prism Code//`;



export const reuseButton14 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list d-md-flex flex-wrap">

<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="info-transparent" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="warning-transparent" Customclass="btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
</SpkButton>

<SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn-loader" Disabled={true}>
    <span className="me-2">Disabled</span>
    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
</SpkButton>
</div>// End Prism Code//`;

export const reactButton15 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list d-md-flex d-block">
<div className="mb-md-0 mb-2">
    <SpkButton variant="primary" className="btn btn-icon  btn-wave">
        <i className="ri-bank-fill"></i>
    </SpkButton>
    <SpkButton variant="info" className="btn btn-icon  btn-wave">
        <i className="ri-medal-line"></i>
    </SpkButton>
    <SpkButton variant="danger" className="btn btn-icon  btn-wave">
        <i className="ri-archive-line"></i>
    </SpkButton>
    <SpkButton variant="warning" className="btn btn-icon  btn-wave me-5">
        <i className="ri-calendar-2-line"></i>
    </SpkButton>
</div>
<div className="mb-md-0 mb-2">
    <SpkButton variant="primary-transparent" className="btn btn-icon rounded-pill btn-wave">
        <i className="ri-home-smile-line"></i>
    </SpkButton>
    <SpkButton variant="secondary-transparent" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-delete-bin-line"></i>
    </SpkButton>
    <SpkButton variant="success-transparent" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-notification-3-line"></i>
    </SpkButton>
    <SpkButton variant="danger-transparent" className="btn btn-icon  rounded-pill btn-wave me-5">
        <i className="ri-chat-settings-line"></i>
    </SpkButton>
</div>
<div className="">
    <SpkButton variant="outline-primary" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-phone-line"></i>
    </SpkButton>
    <SpkButton variant="outline-teal" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-customer-service-2-line"></i>
    </SpkButton>
    <SpkButton variant="outline-success" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-live-line"></i>
    </SpkButton>
    <SpkButton variant="outline-secondary" className="btn btn-icon  rounded-pill btn-wave">
        <i className="ri-save-line"></i>
    </SpkButton>
</div>
</div> // End Prism Code//`;

export const reuseButton15 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list d-md-flex d-block">
<div className="mb-md-0 mb-2">
<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-icon">
    <i className="ri-bank-fill"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-icon">
    <i className="ri-medal-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="danger" Customclass="btn-icon">
    <i className="ri-archive-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="btn-icon me-5">
    <i className="ri-calendar-2-line"></i>
</SpkButton>
</div>
<div className="mb-md-0 mb-2">
<SpkButton Buttontype="button" Buttonvariant="primary-transparent" Customclass="rounded-pill btn-icon">
    <i className="ri-home-smile-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary-transparent" Customclass="rounded-pill btn-icon">
    <i className="ri-delete-bin-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="success-transparent" Customclass="rounded-pill btn-icon">
    <i className="ri-notification-3-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="danger-transparent" Customclass="rounded-pill btn-icon me-5">
    <i className="ri-chat-settings-line"></i>
</SpkButton>
</div>
<div className="">
<SpkButton Buttontype="button" Buttonvariant="outline-primary" Customclass="rounded-pill btn-icon">
    <i className="ri-phone-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="outline-teal" Customclass="rounded-pill btn-icon">
    <i className="ri-customer-service-2-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="outline-success" Customclass="rounded-pill btn-icon">
    <i className="ri-live-line"></i>
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Customclass="rounded-pill btn-icon">
    <i className="ri-save-line"></i>
</SpkButton>
</div>
</div>`

export const reactButton16 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button} from "react-bootstrap";

<div className="btn-list d-md-flex d-block gap-5">
<div className="mb-md-0 mb-2">
    <SpkButton className="btn btn-sm btn-icon btn-primary btn-wave">
        <i className="ri-bank-fill"></i>
    </SpkButton>
    <SpkButton className="btn btn-icon btn-info btn-wave">
        <i className="ri-medal-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-lg btn-icon btn-danger btn-wave">
        <i className="ri-archive-line"></i>
    </SpkButton>
</div>
<div className="mb-md-0 mb-2">
    <SpkButton className="btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave">
        <i className="ri-home-smile-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-icon btn-secondary-light rounded-pill btn-wave">
        <i className="ri-delete-bin-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-lg btn-icon btn-success-light rounded-pill btn-wave">
        <i className="ri-notification-3-line"></i>
    </SpkButton>
</div>
<div className="">
    <SpkButton className="btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave">
        <i className="ri-phone-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-icon btn-outline-teal rounded-pill btn-wave">
        <i className="ri-customer-service-2-line"></i>
    </SpkButton>
    <SpkButton className="btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave">
        <i className="ri-live-line"></i>
    </SpkButton>
</div>
</div>`

export const reuseButton16 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list d-md-flex d-block gap-5">
<div className="mb-md-0 mb-2">
    <SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="btn-icon">
        <i className="ri-bank-fill"></i>
    </SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="info" Customclass="btn-icon">
        <i className="ri-medal-line"></i>
    </SpkButton>
    <SpkButton Size="lg"  Buttontype="button" Buttonvariant="danger" Customclass="btn-icon">
    <i className="ri-archive-line"></i>
    </SpkButton>
</div>
<div className="mb-md-0 mb-2">
    <SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="rounded-pill btn-icon">
        <i className="ri-home-smile-line"></i>
    </SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="secondary-light" Customclass="rounded-pill btn-icon">
    <i className="ri-delete-bin-line"></i>
    </SpkButton>
    <SpkButton Size="lg"  Buttontype="button" Buttonvariant="success-light" Customclass="rounded-pill btn-icon">
    <i className="ri-notification-3-line"></i>
    </SpkButton>
</div>
<div className="">
    <SpkButton Size="sm" Buttontype="button" Buttonvariant="outline-primary" Customclass="rounded-pill btn-icon">
        <i className="ri-phone-line"></i>
    </SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="outline-teal" Customclass="rounded-pill btn-icon">
        <i className="ri-customer-service-2-line"></i>
    </SpkButton>
    <SpkButton Size="lg"  Buttontype="button" Buttonvariant="outline-success" Customclass="rounded-pill btn-icon">
        <i className="ri-live-line"></i>
    </SpkButton>
</div>
</div> // End Prism Code//`;

export const dataButton17 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
 interface SocialIcon {
     id: number
     class: string
     class1: string;
 }
 export const SocialIconButtons: SocialIcon[] = [
     { id: 1, class: "facebook", class1: "facebook" },
     { id: 2, class: "twitter-x", class1: "twitter" },
     { id: 3, class: "instagram", class1: "instagram" },
     { id: 4, class: "github", class1: "github" },
     { id: 5, class: "youtube", class1: "youtube" },
     { id: 5, class: "google", class1: "google" },
 
 ]; // End Prism Code//`

export const reactButton17 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//

 import { Button} from "react-bootstrap";
 
 <SpkButton className="btn btn-icon btn-facebook btn-wave waves-effect waves-light">
 <i className="ri-facebook-line"></i>
 </SpkButton>
 <SpkButton className="btn btn-icon btn-twitter btn-wave waves-effect waves-light">
  <i className="ri-twitter-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-instagram btn-wave waves-effect waves-light">
 <i className="ri-instagram-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-github btn-wave waves-effect waves-light">
      <i className="ri-github-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-youtube btn-wave waves-effect waves-light">
      <i className="ri-youtube-line"></i>
  </SpkButton>
  <SpkButton className="btn btn-icon btn-google btn-wave waves-effect waves-light">
      <i className="ri-google-line"></i>
  </SpkButton> // End Prism Code//`;

export const reuseButton17 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

{SocialIconButtons.map((idx,index) => (
    <SpkButton   Buttontype="button" Buttonvariant={idx.class1} Customclass="waves-effect waves-light m-1 btn-icon" key={index}>
        <i className={'ri-{idx.class}-line'}></i>
    </SpkButton>
))}// End Prism Code//`;

export const reactButton18 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton type="button" variant='primary' className="btn  btn-sm btn-wave">Small
    button</SpkButton>
<SpkButton type="button" variant='secondary' className="btn  btn-wave">Default
    button</SpkButton>
<SpkButton type="button" variant='success' className="btn  btn-lg btn-wave">Large
    button</SpkButton>
</div> // End Prism Code//`;

export const reuseButton18 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<SpkButton Size="sm"  Buttontype="button" Buttonvariant="primary" Customclass="">
    Small button
</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="">
    Default button
</SpkButton>
<SpkButton Size="lg"  Buttontype="button" Buttonvariant="success" Customclass="">
    Large button
</SpkButton>
</div> // End Prism Code//`;

export const reactButton19 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton type="button" variant='primary' className="btn btn-w-xs btn-wave">XS</SpkButton>
<SpkButton type="button" variant='secondary' className="btn btn-w-sm btn-wave">SM</SpkButton>
<SpkButton type="button" variant='warning' className="btn btn-w-md btn-wave">MD</SpkButton>
<SpkButton type="button" variant='info' className="btn btn-w-lg btn-wave">LG</SpkButton>
</div> // End Prism Code//`;

export const reuseButton19 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-w-xs">XS</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-w-sm">SM</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="btn-w-md">MD</SpkButton>
<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-w-lg">LG</SpkButton>
</div>// End Prism Code//`;


export const reactButton20 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list d-flex">
<div className="me-5">
    <SpkButton variant='primary' className="btn  shadow-sm btn-wave">Button</SpkButton>
    <SpkButton variant='primary' className="btn btn-primary shadow btn-wave">Button</SpkButton>
    <SpkButton variant='primary' className="btn btn-primary shadow-lg btn-wave">Button</SpkButton>
</div>
<div>
    <SpkButton variant='secondary' className="btn  btn-sm shadow-sm btn-wave">Button</SpkButton>
    <SpkButton variant='info' className="btn  shadow btn-wave">Button</SpkButton>
    <SpkButton variant='success' className="btn btn-lg  shadow-lg btn-wave">Button</SpkButton>
</div>
</div> // End Prism Code//`;

export const reuseButton20 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
<div className="btn-list d-flex">
<div className="me-5">
    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow-sm">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow-lg">Button</SpkButton>
</div>
<div>

    <SpkButton Size="sm" Buttontype="button" Buttonvariant="secondary" Customclass="shadow-sm">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="info" Customclass="shadow">Button</SpkButton>
    <SpkButton Size="lg" Buttontype="button" Buttonvariant="success" Customclass="shadow-lg">Button</SpkButton>
</div>
</div>// End Prism Code//`;

export const dataButton21 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface coloredbtn {
	id: number
	class: string
}
export const ColoredButtons: coloredbtn[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" },
	{ id: 6, class: "purple" },
	{ id: 6, class: "orange" },

]; // End Prism Code//`

export const reactButton21 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";
import {ColoredButtons } from "@/shared/data/ui-elements/buttonsdata";

{ColoredButtons.map((idx,index) => (
    <SpkButton variant={idx.class} className={btn shadow-{idx.class} btn-wave} key={index}>Button</SpkButton>
))} // End Prism Code//`;

export const reuseButton21 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import {ColoredButtons } from "@/shared/data/ui-elements/buttonsdata";

<div className="btn-list">
    {ColoredButtons.map((idx,index) => (
        <SpkButton  Buttontype="button" Buttonvariant={idx.class} Customclass={shadow-{idx.class}} key={index}>Button</SpkButton>
    ))}
</div> // End Prism Code//`;

export const dataButton22 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface coloredbtn {
	id: number
	class: string
}
export const ColoredButtons: coloredbtn[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" },
	{ id: 6, class: "purple" },
	{ id: 6, class: "orange" },

]; // End Prism Code//`
export const reuseButton22 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
    {ColoredButtons.map((idx,index) => (
        <SpkButton  Buttontype="button" Buttonvariant={idx.class} Customclass="btn-raised-shadow" key={index}>Button</SpkButton>
    ))}
</div> // End Prism Code//`;

export const reactButton22 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";
import {ColoredButtons } from "@/shared/data/ui-elements/buttonsdata";

{ColoredButtons.map((idx,index) => (
    <SpkButton variant={idx.class} className="btn  btn-raised-shadow btn-wave" 
    key={index}>Button</SpkButton>
))} // End Prism Code//`;

export const reactButton23 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton className="btn btn-primary label-btn">
    <i className="ri-chat-smile-line label-btn-icon me-2"></i>
    Primary
</SpkButton>
<SpkButton className="btn btn-secondary label-btn">
    <i className="ri-settings-4-line label-btn-icon me-2"></i>
    Secondary
</SpkButton>
<SpkButton className="btn btn-warning label-btn rounded-pill">
    <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
    Warning
</SpkButton>
<SpkButton className="btn btn-info label-btn rounded-pill">
    <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
    Info
</SpkButton>
<SpkButton className="btn btn-success label-btn label-end">
    Success
    <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
</SpkButton>
<SpkButton className="btn btn-danger label-btn label-end rounded-pill">
    Cancel
    <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
</SpkButton>
</div> // End Prism Code//`;

export const reuseButton23 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<SpkButton  Buttontype="button" Buttonvariant="primary" Customclass="label-btn">
    <i className="ri-chat-smile-line label-btn-icon me-2"></i>
    Primary
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary" Customclass="label-btn">
<i className="ri-settings-4-line label-btn-icon me-2"></i>
    Secondary
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="warning" Customclass="label-btn rounded-pill">
<i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
    Warning
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="info" Customclass="label-btn rounded-pill">
<i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
    Info
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="success" Customclass="label-btn label-end">
<i className="ri-thumb-up-line label-btn-icon ms-2"></i>
    Success
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="danger" Customclass="label-btn label-end rounded-pill">
    <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
    Cancel
</SpkButton>
</div> // End Prism Code//`;

export const reactButton24 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<SpkButton variant='info' className="btn  custom-button rounded-pill">
    <span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
    Twitter
</SpkButton>
<SpkButton variant='teal-light' className="btn  btn-border-down">Border</SpkButton>
<SpkButton variant='secondary-light' className="btn  btn-border-start">Border</SpkButton>
<SpkButton variant='purple-light' className="btn  btn-border-end">Border</SpkButton>
<SpkButton variant='warning-light' className="btn  btn-border-top">Border</SpkButton>
<SpkButton variant='secondary' className="btn  btn-glare"><span>Glare Button</span></SpkButton>
<SpkButton variant='danger' className="btn  btn-hover btn-hover-animate">Like</SpkButton>
<SpkButton variant='success' className="btn  btn-darken-hover">Hover</SpkButton>
<SpkButton variant='orange' className="btn  btn-custom-border">Hover</SpkButton>
</div> // End Prism Code//`;

export const reuseButton24 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";

<div className="btn-list">
<SpkButton  Buttontype="button" Buttonvariant="info" Customclass="custom-button rounded-pill">
    <span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
    Twitter
</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="teal-light" Customclass="btn-border-down">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-border-start">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="purple-light" Customclass="btn-border-end">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="warning-light" Customclass="btn-border-top">Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary" Customclass="btn-glare"> Glare Border</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="danger" Customclass="btn-hover btn-hover-animate">Like</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="success" Customclass="btn-darken-down">Hover</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="orange" Customclass="btn-custom-down">Hover</SpkButton>
</div> // End Prism Code//`;

export const reactButton25 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Button} from "react-bootstrap";

<div className="btn-list">
<div className="d-grid gap-2 mb-4">
    <SpkButton variant='primary' className="btn  btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='secondary' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-block">
    <SpkButton variant='info' className="btn  btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='success' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
    <SpkButton variant='danger' className="btn  btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='warning' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <SpkButton variant='teal' className="btn me-md-2 btn-wave" type="button">Button</SpkButton>
    <SpkButton variant='purple' className="btn  btn-wave" type="button">Button</SpkButton>
</div>
</div> // End Prism Code//`;


export const reuseButton25 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
<div className="btn-list">
<div className="d-grid gap-2 mb-4">
<SpkButton  Buttontype="button" Buttonvariant="primary">Button</SpkButton>
<SpkButton  Buttontype="button" Buttonvariant="secondary">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-block">

    <SpkButton  Buttontype="button" Buttonvariant="info">Button</SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="success">Button</SpkButton>
</div>
<div className="d-grid gap-2 col-6 mx-auto">

    <SpkButton  Buttontype="button" Buttonvariant="danger">Button</SpkButton>
    <SpkButton  Buttontype="button" Buttonvariant="warning">Button</SpkButton>
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">

    <SpkButton  Buttontype="button" Buttonvariant="teal">Button</SpkButton>
    <SpkButton Buttontype="button" Buttonvariant="purple">Button</SpkButton>
</div>
</div> // End Prism Code//`;


// end Buttons

//Dropdowns
export const reactdropdown1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropdown">
 <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
     id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     Dropdown button
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
     <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
<Dropdown className="dropdown">
 <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" href="#!" scroll={false} role="button"
     id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
     Dropdown link
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
     <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<div className="btn-list d-flex align-items-center flex-wrap">
<SpkDropdown Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Dropdown button">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
</SpkDropdown>
<SpkDropdown Id="dropdownMenuButton1" Togglevariant="secondary" Navigate="#!" Menulabel="dropdownMenuLink" Toggletext="Dropdown link">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
</SpkDropdown>
</div> // End Prism Code//`;

export const datadropdown2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}
export const OutlineButtons: split[] = [
	{ id: 1, class: "outline-primary" },
	{ id: 2, class: "outline-secondary" },
	{ id: 3, class: "outline-success" },
	{ id: 4, class: "outline-info" },
	{ id: 5, class: "outline-warning" },
	{ id: 6, class: "outline-danger" }
]; // End Prism Code// // End Prism Code//`;

export const reactdropdown2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//	
import { Dropdown } from "react-bootstrap";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{OutlineButtons.map((idx,index) => (
    <div className="btn-group me-0" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div> // End Prism Code//`;

export const reusedropdown2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//	
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{OutlineButtons.map((idx,index) => (
    <SpkButtongroup key={index}>
        <SpkDropdown Togglevariant={idx.class} Navigate="#!"  Toggletext="Action" Menuas="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
    </SpkButtongroup>
))}
</div> // End Prism Code//`;

export const datadropdown3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}

export const SingleButtons: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; // End Prism Code// // End Prism Code//`;

export const reactdropdown3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

{SingleButtons.map((idx,index) => (
    <div className="btn-group" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!" scroll={false}>Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))} // End Prism Code//`;

export const reusedropdown3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
    {SingleButtons.map((idx,index) => (
        <SpkButtongroup  key={index}>
            <SpkDropdown  Togglevariant={idx.class} Navigate="#!"  Toggletext="Action" Menuas="ul">
                    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div> // End Prism Code//`;

export const reactdropdown4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import { Dropdown } from "react-bootstrap";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

{OutlineButtons.map((idx,index) => (
    <div className="btn-group" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" href="#!" scroll={false}>Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))} // End Prism Code//`;

export const reusedropdown4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// 
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import { OutlineButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
    {OutlineButtons.map((idx,index) => (
        <SpkButtongroup Customclass="me-0" key={index}>
            <SpkDropdown  Togglevariant={idx.class}  Customtoggleclass="rounded-pill" Toggletext="Action" Menuas="ul">
                    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                    <Dropdown.Divider className="dropdown-divider" />
                    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div>// End Prism Code//`;

export const datadropdown5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}
export const SingleButtons: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "success" },
	{ id: 4, class: "info" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; // End Prism Code//`

export const reactdropdown5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{SingleButtons.map((idx,index) => (
    <div className="btn-group" key={index}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>`

export const reusedropdown5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{SingleButtons.map((idx,index) => (
    <SpkButtonGroup key={index}>
        <SpkDropdown  Togglevariant={idx.class}  Customtoggleclass="rounded-pill" Toggletext="Action" Menuas="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
    </ButtonGroup>
))}
</div>`

export const datadropdown6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface split {
	id: number
	class: string
}
export const SplitButtonsdata: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "secondary" },
	{ id: 3, class: "info" },
	{ id: 4, class: "success" },
	{ id: 5, class: "warning" },
	{ id: 6, class: "danger" }
]; // End Prism Code// // End Prism Code//`;


export const reactdropdown6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";
import { SplitButtonsdata } from "@/shared/data/ui-elements/dropdownsdata";

{SplitButtonsdata.map((idx,index) => (
    <SplitButton key={index} className='me-2 my-1'
        variant={idx.class}
        title="Action"
    >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
            Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
))} // End Prism Code//`;

export const reusedropdown6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import { SplitButtonsdata } from "@/shared/data/ui-elements/dropdownsdata";

{SplitButtonsdata.map((idx,index) => (
    <SplitButton key={index} className='me-2 my-1'
        variant={idx.class}
        title="Action"
    >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
            Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
))} // End Prism Code//`;

export const reactdropdown7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<div className="btn-group my-1 me-2">
<Dropdown>
    <Dropdown.Toggle variant='' className="btn btn-primary btn-lg dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        Large button
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div> // End Prism Code//`;

export const reusedropdown7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown  Togglevariant="primary"  Size="lg" Toggletext="Large button" Menuas="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown as={ButtonGroup} Buttontag={true} Buttonposition="before" Buttontext="Large split button" color="light" Togglevariant="light" Split={true} 
            Customtoggleclass="btn-lg" Menuas="ul" Id="dropdown-split-basic">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown as={ButtonGroup} Togglevariant="primary" Size="sm" Menuas="ul" Toggletext="Small button">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup>
<SpkButtongroup Customclass="my-1 me-2">
        <SpkDropdown as={ButtonGroup} Buttontag={true} Buttontext="Small split button" Buttonposition="before" Id="dropdown-split-basic"
            Togglevariant="light" color="light" Size="sm" Menuas="ul" Split={true} >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </SpkDropdown>
</SpkButtongroup> // End Prism Code//`;


export const reactdropdown8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown>
    <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    	data-bs-toggle="dropdown" aria-expanded="false">
    	Dropstart
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
    	<Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
    	<Dropdown.Item className="dropdown-item disabled" href="#!" aria-current="true">Active
    		link</Dropdown.Item>
    	<Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<SpkDropdown Toggletext="Dropstart" Togglevariant="primary"  Menuas="ul">
        <Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
        <Dropdown.Item className="dropdown-item disabled" href="#!" aria-current="true">Active
            link</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
</SpkDropdown> // End Prism Code//`;

export const datadropdown9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
  interface autoclose {
      id: number
      text: string
      class: string
  }
  export const AutocloseButtons: autoclose[] = [
      { id: 1, class: "primary", text: "Default dropdown" },
      { id: 2, class: "secondary", text: "Clickable  outside" },
      { id: 3, class: "info", text: "Clickable  inside" },
      { id: 4, class: "warning", text: "Manual  close" },
  ]; // End Prism Code//`

export const reactdropdown9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
  import { Dropdown } from "react-bootstrap";
  import { AutocloseButtons } from "@/shared/data/ui-elements/dropdownsdata";
  
  <div className="btn-list">
      {AutocloseButtons.map((idx,index) => (
          <div className="btn-group" key={index}>
              <Dropdown>
                  <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle" type="button"
                      id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                      aria-expanded="false">
                      {idx.text}
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
                      <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                      <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                      <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </div>
      ))}
  </div> // End Prism Code//`;

export const reusedropdown9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
import { AutocloseButtons } from "@/shared/data/ui-elements/dropdownsdata";

<div className="btn-list">
{AutocloseButtons.map((idx,index) => (
    <SpkButtongroup key={index}>
    <SpkDropdown Toggletext={idx.text} Togglevariant={idx.class}  Menuas="ul" Id="defaultDropdown">
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
    </SpkDropdown>
    </SpkButtongroup>
))}
</div> // End Prism Code//`;

export const reactdropdown10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu">
    <Form className="px-4 py-3">
        <div className="mb-3">
            <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                address</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
                placeholder="email@example.com" />
        </div>
        <div className="mb-3">
            <Form.Label htmlFor="exampleDropdownFormPassword1"
                className="form-label">Password</Form.Label>
            <Form.Control type="password" className="form-control"
                id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div className="mb-3">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                    Remember me
                </label>
            </div>
        </div>
        <SpkButton variant='' type="submit" className="btn btn-primary">Sign in</SpkButton>
    </Form>
    <div className="dropdown-divider"></div>
    <Dropdown.Item as="li" href="#!">New around here? Sign up</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Forgot password?</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown10 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<SpkDropdown Toggletext="Dropdown" Togglevariant="secondary"  Menuas="ul" Id="dropdownMenu2">
<Form className="px-4 py-3">
    <div className="mb-3">
        <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
            address</Form.Label>
        <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
            placeholder="email@example.com" />
    </div>
    <div className="mb-3">
        <Form.Label htmlFor="exampleDropdownFormPassword1"
            className="form-label">Password</Form.Label>
        <Form.Control type="password" className="form-control"
            id="exampleDropdownFormPassword1" placeholder="Password" />
    </div>
    <div className="mb-3">
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
            </label>
        </div>
    </div>
    <SpkButton Buttonvariant='primary' Buttontype="submit">Sign in</SpkButton>
</Form>
<div className="dropdown-divider"></div>
<Dropdown.Item as="li" href="#!">New around here? Sign up</Dropdown.Item>
<Dropdown.Item as="li" href="#!">Forgot password?</Dropdown.Item>
</SpkDropdown> // End Prism Code//`;


export const reactdropdown11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropdown-center">
	<Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
		id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
		Centered dropdown
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul" aria-labelledby="dropdownCenterBtn">
		<Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
		<Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
		<Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
</p>
<SpkDropdown Drop="down-centered" Toggletext="Centered dropdown" Togglevariant="primary"  Menuas="ul" Id="dropdownCenterBtn" Menulabel="dropdownCenterBtn">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
</SpkDropdown> // End Prism Code//`;


export const reactdropdown12 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropup-center dropup" drop="up">
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
    id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`

export const reusedropdown12 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
dropdown items.</p>
<SpkDropdown Toggletext="Dropdown" Togglevariant="info"  Menuas="ul" Id="dropdownMenu1" Menulabel="dropdownMenu1">
    <Dropdown.Item as="li">Action</Dropdown.Item>
    <Dropdown.Item as="li">Another action
    </Dropdown.Item>
    <Dropdown.Item as="li">Something else here</Dropdown.Item>
</SpkDropdown>`

export const reactdropdown13 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import { Dropdown } from "react-bootstrap";

<Dropdown className="dropdown">
	<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
		id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
		Dropdown
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action
		</Dropdown.Item>
		<Dropdown.Item as="li">Something else
			here
		</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown13 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<Dropdown className="dropdown">
	<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
		id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
		Dropdown
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action
		</Dropdown.Item>
		<Dropdown.Item as="li">Something else
			here
		</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown> // End Prism Code//`;


export const reactdropdown14 = `
import { Dropdown } from "react-bootstrap";

<p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
 the location of the dropdown.</p>
 <div className="d-flex align-items-center flex-wrap">
 <Dropdown className="dropdown me-1 mt-1">
     <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
         id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
         data-bs-offset="10,20">
         Offset
     </Dropdown.Toggle>
     <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
         <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
         <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
         <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
     </Dropdown.Menu>
 </Dropdown>
 <SpkButtonGroup className="btn-group custom-btn-group mt-1">
     <SpkButton variant='' type="button" className="btn btn-info">Reference</SpkButton>
     <Dropdown>
         <Dropdown.Toggle variant='' type="button"
             className="btn btn-info dropdown-toggle dropdown-toggle-split"
             id="dropdownMenuReference" data-bs-toggle="dropdown"
             aria-expanded="false" data-bs-reference="parent">
             <span className="visually-hidden">Toggle Dropdown</span>
         </Dropdown.Toggle>
         <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuReference">
             <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
             <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
             <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
             <Dropdown.Divider className="dropdown-divider" />
             <Dropdown.Item as="li" href="#!" scroll={false}>Separated link</Dropdown.Item>
         </Dropdown.Menu>
     </Dropdown>
 </ButtonGroup>
 </div> // End Prism Code//`;

export const reusedropdown14 = `
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
    the location of the dropdown.</p>
<div className="d-flex align-items-center flex-wrap">
<SpkDropdown Toggletext="Offset" Customclass="me-1 mt-1" Togglevariant="primary"  Menuas="ul" Id="dropdownMenuOffset" Menulabel="dropdownMenuOffset">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
</SpkDropdown>

<SpkDropdown as={ButtonGroup} Drop="up" Buttontag={true} Buttonposition="before"  Buttontext="Reference" color="info" Customtoggleclass="dropdown-toggle-split" Customclass=" my-1" 
    Togglevariant="info" Split={true}  Menuas="ul">
            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown>
</div> // End Prism Code//`;

export const reactdropdown15 = `

 import { Dropdown } from "react-bootstrap";

 <Dropdown drop="up" className="btn-group dropup my-1 me-2">
 <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
     data-bs-toggle="dropdown" aria-expanded="false">
     Dropup
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item as="li" href="#!" scroll={false}>Separated link</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
<Dropdown drop="up" className="btn-group dropup my-1">
 <SpkButton variant='' type="button" className="btn btn-info">
     Split dropup
 </SpkButton>
 <Dropdown.Toggle variant='' type="button"
     className="btn btn-info dropdown-toggle dropdown-toggle-split"
     data-bs-toggle="dropdown" aria-expanded="false">
     <span className="visually-hidden">Toggle Dropdown</span>
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" href="#!" scroll={false}>Action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Another action</Dropdown.Item>
     <Dropdown.Item as="li" href="#!" scroll={false}>Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item as="li" href="#!" scroll={false}>Separated link</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown15 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <SpkDropdown as={ButtonGroup} Drop="up"  Toggletext="Dropup" Customclass="my-1 me-2" 
Togglevariant="primary" Menuas="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown>
<SpkDropdown as={ButtonGroup} Drop="up" Buttontag={true} Buttontext="Split dropup" Buttonposition="before" Customclass="my-1" color="info" Split={true}
Togglevariant="info" Menuas="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown> // End Prism Code//`;

export const reactdropdown16 = `

 import { Dropdown } from "react-bootstrap";

 <Dropdown className="btn-group dropend my-1 me-2" drop="end">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
	data-bs-toggle="dropdown" aria-expanded="false">
	Dropright
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
	<Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
	<Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
	<Dropdown.Divider className="dropdown-divider" />
	<Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
						</Dropdown>
						<Dropdown drop="end" className="btn-group dropend my-1">
<SpkButton variant='' type="button" className="btn btn-info">
	Split dropend
</SpkButton>
<Dropdown.Toggle variant='' type="button"
	className="btn btn-info dropdown-toggle dropdown-toggle-split"
	data-bs-toggle="dropdown" aria-expanded="false">
	<span className="visually-hidden">Toggle Dropright</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
	<Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
	<Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
	<Dropdown.Divider className="dropdown-divider" />
	<Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
	</Dropdown> // End Prism Code//`;

export const reusedropdown16 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <SpkDropdown as={ButtonGroup} Drop="end"  Toggletext="Dropright" Customclass="my-1 me-2" Togglevariant="primary" Menuas="ul">
<Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown>
<SpkDropdown as={ButtonGroup} Drop="end" Buttontag={true} Buttontext="Split dropend" Buttonposition="before" Customclass="my-1" color="info" Split={true}
    Togglevariant="info" Menuas="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown> // End Prism Code//`;

export const reactdropdown17 = `

 import { Dropdown } from "react-bootstrap";

 <Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
	data-bs-toggle="dropdown" aria-expanded="false">
	Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
	<Dropdown.Item className="dropdown-item active" href="#!" aria-current="true">Active
		link
	</Dropdown.Item>
	<Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> // End Prism Code//`;


export const reusedropdown17 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <SpkDropdown Toggletext="Dropstart" Togglevariant="primary" Menuas="ul">
    <Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
    <Dropdown.Item className="dropdown-item active" href="#!" aria-current="true">Active
        link
    </Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
</SpkDropdown>// End Prism Code//`;


export const reactdropdown18 = `

 import { Dropdown } from "react-bootstrap";

 <Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
	data-bs-toggle="dropdown" aria-expanded="false">
	Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
	<Dropdown.Item as="li" href="#!">Regular link</Dropdown.Item>
	<Dropdown.Item className="dropdown-item active" href="#!" aria-current="true">Active
		link
	</Dropdown.Item>
	<Dropdown.Item as="li" href="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown18 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<SpkDropdown as={ButtonGroup} Drop="start"  Toggletext="Dropleft" Customclass="my-1 me-2" Togglevariant="primary" Menuas="ul">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider className="dropdown-divider" />
        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown>
<SpkButtongroup>
<SpkDropdown as={ButtonGroup} Drop="start" Customclass="my-1" Split={true} Buttontag={true} Buttontext="Split dropstart" color="info" Togglevariant="info" Menuas="ul">
            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</SpkDropdown>
</SpkButtongroup>// End Prism Code//`;

export const datadropdown19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
interface alignment {
	id: number
	text: string
	class: string
	dir: string
}
export const AlignmentButtons: alignment[] = [
	{ id: 1, class: "primary", text: "Dropdown", dir: "" },
	{ id: 2, class: "secondary", text: "Right-aligned menu", dir: "" },
	{ id: 3, class: "info", text: "Left-aligned, right-aligned lg", dir: "" },
	{ id: 4, class: "warning", text: "Right-aligned, left-aligned lg", dir: "" },
	{ id: 5, class: "success", text: "Dropstart", dir: "start" },
	{ id: 6, class: "danger", text: "Dropend", dir: "end" },
	{ id: 7, class: "teal", text: "Dropup", dir: "up" }
]; // End Prism Code//`

export const reactdropdown19 = `

 import { Dropdown } from "react-bootstrap";

 <div className="btn-list">
 {AlignmentButtons.map((idx) => (
     <div className="btn-group" key={index}>
         <Dropdown drop={idx.dir}>
             <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
                 id="dropdownMenuButton" data-bs-toggle="dropdown"
                 aria-expanded="false">
                 {idx.text}
             </Dropdown.Toggle>
             <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
                 <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                 <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                 <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
             </Dropdown.Menu>
         </Dropdown>
     </div>
 ))}
</div> // End Prism Code//`;

export const reusedropdown19 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <div className="btn-list">
{AlignmentButtons.map((idx) => (
    <SpkButtongroup key={index}>
        <SpkDropdown Drop={idx.dir} Customclass="mb-0" Togglevariant={idx.class} Toggletext={idx.text} Menuas="ul" Id="dropdownMenuButton" Menulabel="dropdownMenuButton">
                    <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
        </SpkDropdown>
    </SpkButtongroup>
))}
</div> // End Prism Code//`;

export const reactdropdown20 = `

 import { Dropdown } from "react-bootstrap";

 <Dropdown>
 <Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
     id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
     Dropdown button
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-dark">
     <Dropdown.Item as="li"><Link href="#!">Action</Link></Dropdown.Item>
     <Dropdown.Item as="li"><Link href="#!">Another action</Link></Dropdown.Item>
     <Dropdown.Item as="li"><Link href="#!">Something else here</Link></Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown20 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <SpkDropdown Togglevariant="dark" Toggletext="Dropdown button" Menuas="ul" Menuclass="dropdown-menu-dark" Id="dropdownMenuButton3" Menulabel="dropdownMenuButton3">
        <Dropdown.Item as="li"><Link href="#!">Action</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link href="#!">Another action</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link href="#!">Something else here</Link></Dropdown.Item>
</SpkDropdown> // End Prism Code//`;

export const reactdropdown21 = `

 import { Dropdown } from "react-bootstrap";

 <div className="bd-example">
 <Dropdown.Menu className="dropdown-menu" show>
     <Dropdown.Item as="li"><span className="dropdown-item-text px-0">Dropdown item text</span>
     </Dropdown.Item>
     <Dropdown.Item href="#!">Action</Dropdown.Item>
     <Dropdown.Item href="#!">Another action</Dropdown.Item>
     <Dropdown.Item href="#!">Something else here
     </Dropdown.Item>
 </Dropdown.Menu>
</div> // End Prism Code//`;

export const reusedropdown21 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 	<p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
<div className="bd-example">
    <Dropdown.Menu className="dropdown-menu" show>
        <Dropdown.Item as="li"><span className="dropdown-item-text px-0">Dropdown item text</span>
        </Dropdown.Item>
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here
        </Dropdown.Item>
    </Dropdown.Menu>
</div>// End Prism Code//`;


export const reactdropdown22 = `

 import { Dropdown } from "react-bootstrap";

 <div className="bd-example">
 <Dropdown.Menu show>
     <Dropdown.Header>
         <h6 className="dropdown-header px-0">Dropdown header</h6>
     </Dropdown.Header>
     <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
 </Dropdown.Menu>
</div> // End Prism Code//`;

export const reusedropdown22 = `

 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
<div className="bd-example">
    <Dropdown.Menu show>
        <Dropdown.Header>
            <h6 className="dropdown-header px-0">Dropdown header</h6>
        </Dropdown.Header>
        <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</div> // End Prism Code//`;

export const reactdropdown23 = `
 import { Dropdown } from "react-bootstrap";
 
 <div className="bd-example">
 <Dropdown.Menu className="dropdown-menu" show>
     <Dropdown.Header>Heading</Dropdown.Header>
     <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
     <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
 </Dropdown.Menu>
</div> // End Prism Code//`;

export const reusedropdown23 = `
 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";
 
	<div className="bd-example">
<Dropdown.Menu className="dropdown-menu" show>
    <Dropdown.Header>Heading</Dropdown.Header>
    <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</div> // End Prism Code//`;

export const reactdropdown24 = `
 import { Dropdown } from "react-bootstrap";

 <div className="bd-example">
 <Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
     <p>
         Some example text that's free-flowing within the dropdown menu.
     </p>
     <p className="mb-0">
         And this is more example text.
     </p>
 </Dropdown.Menu>
</div> // End Prism Code//`;


export const reusedropdown24 = `
 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<div className="bd-example">
    <Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
        <p>
            Some example text that's free-flowing within the dropdown menu.
        </p>
        <p className="mb-0">
            And this is more example text.
        </p>
    </Dropdown.Menu>
</div> // End Prism Code//`;

export const reactdropdown25 = `
 import { Dropdown } from "react-bootstrap";

 <Dropdown>
 <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
     data-bs-toggle="dropdown" aria-expanded="false">
     Right-aligned menu example
 </Dropdown.Toggle>
 <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
     <Dropdown.Item as="li">Action
     </Dropdown.Item>
     <Dropdown.Item as="li">Another
         action</Dropdown.Item>
     <Dropdown.Item as="li">Something else
         here
     </Dropdown.Item>
 </Dropdown.Menu>
</Dropdown> // End Prism Code//`;

export const reusedropdown25 = `
 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<SpkDropdown Menualign="end"  Toggletext="Right-aligned menu example" Customclass="d-inline-block" Togglevariant="primary" Customtoggleclass="d-inline-block"  Menuas="ul">
    <Dropdown.Item as="li">Action</Dropdown.Item>
    <Dropdown.Item as="li">Another	action</Dropdown.Item>
    <Dropdown.Item as="li">Something else here</Dropdown.Item>
</SpkDropdown> // End Prism Code//`;

export const reactdropdown26 = `
 import { Dropdown } from "react-bootstrap";

 <div className="btn-group text-wrap">
 <DropdownButton variant="secondary" as={ButtonGroup} align={{ lg: "end" }} title="Left-aligned but right aligned when large screen text-wrap" id="dropdown-menu-align-responsive-1" className="text-wrap">
     <Dropdown.Item href="#!">Action</Dropdown.Item>
     <Dropdown.Item href="#!">Another action</Dropdown.Item>
     <Dropdown.Item href="#!">Something else here
     </Dropdown.Item>
 </DropdownButton>
</div> // End Prism Code//`;

export const reusedropdown26 = `
 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <SpkButtongroup>
    <SpkDropdown as={ButtonGroup} Align={{ lg: "end" }} Toggletext="Left-aligned but right aligned when large screen" Id="dropdown-menu-align-responsive-1" Customclass="text-wrap" Togglevariant="secondary"   Menuas="ul">
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
    </SpkDropdown>
</SpkButtongroup>// End Prism Code//`;

export const reactdropdown27 = `
 import { Dropdown } from "react-bootstrap";

 <div className="btn-group text-wrap">
	<DropdownButton variant="info" as={ButtonGroup} align={{ lg: "start" }} title="Left-aligned but right aligned when large screen" className="text-wrap" id="dropdown-menu-align-responsive-1">
		<Dropdown.Item href="#!">Action</Dropdown.Item>
		<Dropdown.Item href="#!">Another action</Dropdown.Item>
		<Dropdown.Item href="#!">Something else here
		</Dropdown.Item>
	</DropdownButton>
</div> // End Prism Code//`;

export const reusedropdown27 = `
 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <SpkButtongroup>
    <SpkDropdown as={ButtonGroup} Toggletext="Left-aligned but right aligned when large screen" Id="dropdown-menu-align-responsive-1" Customclass="text-wrap" Togglevariant="info"   Menuas="ul">
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
    </SpkDropdown>
</SpkButtongroup> // End Prism Code//`;

export const datadropdown28 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
interface custombutton {
	id: number
	text: string
	class: string
	class1: string
	class2: string
}
export const CustomButtons: custombutton[] = [
	{ id: 1, class: "primary", text: "Primary", class1: "menu-primary", class2: "" },
	{ id: 2, class: "secondary", text: "Secondary", class1: "menu-secondary", class2: "" },
	{ id: 3, class: "warning", text: "warning", class2: "item-warning", class1: "" },
	{ id: 4, class: "info", text: "info", class2: "item-info", class1: "" },
	{ id: 5, class: "success-light", text: "success", class2: "dropmenu-light-success", class1: "" },
	{ id: 6, class: "danger-light", text: "danger", class2: "dropmenu-light-danger", class1: "" }
]; // End Prism Code//`

export const reactdropdown28 = `
 import { Dropdown } from "react-bootstrap";

 <div className="btn-list">
 {CustomButtons.map((idx,index) => (
     <div className="btn-group" key={index}>
         <Dropdown>
             <Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 {idx.text}
             </Dropdown.Toggle>
             <Dropdown.Menu className={'dropdown-menu-&#{idx.class} dropdown-&#{idx.class1} dropmenu-&#{idx.class2}}'}>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item" href="#!">Action</Dropdown.Item>
                 </li>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item" href="#!">Another action</Dropdown.Item>
                 </li>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item active" href="#!">Active</Dropdown.Item>
                 </li>
                 <li>
                     <Dropdown.Item as="a" className="dropdown-item" href="#!">Something else here</Dropdown.Item>
                 </li>
             </Dropdown.Menu>
         </Dropdown>
     </div>
 ))}
</div> // End Prism Code//`;

export const reusedropdown28 = `
 import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

<div className="btn-list">
    {CustomButtons.map((idx,index) => (
        <SpkButtongroup key={index}>
            <SpkDropdown Togglevariant={idx.class} Toggletext={idx.text} Menuas="ul" Menuclass={idx.class1}>
                    <li>
                        <Dropdown.Item as="a" className="dropdown-item" href="#!">Action</Dropdown.Item>
                    </li>
                    <li>
                        <Dropdown.Item as="a" className="dropdown-item" href="#!">Another action</Dropdown.Item>
                    </li>
                    <li>
                        <Dropdown.Item as="a" className="dropdown-item" href="#!">Something else here</Dropdown.Item>
                    </li>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div> // End Prism Code//`;

export const datadropdown29 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
interface ghost {
	id: number
	text: string
	class: string
}
export const GhostButtons: ghost[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 2, class: "secondary-ghost", text: "Secondary" },
	{ id: 3, class: "warning-ghost", text: "warning" },
	{ id: 4, class: "info-ghost", text: "info" },
	{ id: 5, class: "success-ghost", text: "success" },
	{ id: 6, class: "danger-ghost", text: "danger" }
]; // End Prism Code//`

export const reactdropdown29 = `
 import { Dropdown } from "react-bootstrap";

 <div className="btn-list">
 {GhostButtons.map((idx,index) => (
     <div className="btn-group" key={index}>
         <Dropdown>
             <Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle"
                 data-bs-toggle="dropdown" aria-expanded="false">
                 {idx.text}
             </Dropdown.Toggle>
             <Dropdown.Menu>
                 <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
                 <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
                 <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
                 <Dropdown.Divider className="dropdown-divider" />
                 <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
             </Dropdown.Menu>
         </Dropdown>
     </div>
 ))}
</div> // End Prism Code//`;

export const reusedropdown29 = `
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown";

 <div className="btn-list">
    {GhostButtons.map((idx,index) => (
        <SpkButtongroup key={index}>
            <SpkDropdown Togglevariant={idx.class} Toggletext={idx.text} Menuas="ul">
                    <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
                    <Dropdown.Divider className="dropdown-divider" />
                    <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
            </SpkDropdown>
        </SpkButtongroup>
    ))}
</div>// End Prism Code//`;

//end Dropdowns

//Images &figures 

export const image1 =
    ` <Image fill className="rounded mx-auto d-block" 
src="../../../assets/images/media/media-55.jpg" alt="..."/> // End Prism Code//`;

export const image2 =
    ` <Image fill className="rounded float-end" src="../../../assets/images/media/media-54.jpg" alt="..."/> // End Prism Code//`;

export const image3 =
    ` <div className="text-center">
<Image fill src="../../../assets/images/media/media-48.jpg" className="img-fluid" alt="..."/>
</div> // End Prism Code//`;

export const image4 =
    `<div className="text-center">
<Image fill src="../../../assets/images/media/media-49.jpg"  className="img-fluid rounded" alt="..."/>
</div> // End Prism Code//`;

export const image5 =
    ` <div className="text-center">
    <Image fill src="../../assets/images/media/media-48.jpg" className="img-fluid" alt="..." />
</div> // End Prism Code//`;

export const image6 =
    ` <div className="text-center">
<Image fill src="../../../assets/images/media/media-50.jpg" className="img-fluid rounded-pill" alt="..."/>
</div> // End Prism Code//`;

export const image7 =
    ` <p className="card-title mb-3">Use <code> .img-thumbnail 
</code>to give an image a rounded 1px border.</p>
 <div className="text-center">
     <Image fill src="../../../assets/images/media/media-51.jpg"
      className="img-thumbnail" alt="..."/>
 </div> // End Prism Code//`;

export const image8 =
    ` <div className="text-center">
<Image fill src="../../../assets/images/media/media-52.jpg"
 className="img-thumbnail rounded-pill" alt="..."/>
</div> // End Prism Code//`;

export const image9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body d-flex justify-content-between gap-2">
<figure className="figure">
    <Image fill className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../../assets/images/media/media-56.jpg" alt="..."/>
    <figcaption className="figure-caption mt-2">A caption for the above image.
    </figcaption>
</figure>
<figure className="figure float-end">
    <Image fill className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../../assets/images/media/media-57.jpg" alt="..."/>
    <figcaption className="figure-caption text-end mt-2">A caption for the above image.
    </figcaption>
</figure>
</div>`
// ListGroup
export const datalistgroup1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface basicbtn {
	id: number
	src: string
	text: string
}

export const BasicButtons: basicbtn[] = [
	{ id: 1, src: "../../assets/images/faces/1.jpg", text: "Isha Bella" },
	{ id: 2, src: "../../assets/images/faces/3.jpg", text: "Elsa Urena" },
	{ id: 3, src: "../../assets/images/faces/16.jpg", text: "Flora Mary" },
	{ id: 4, src: "../../assets/images/faces/15.jpg", text: "Gatin Leo" },
	{ id: 5, src: "../../assets/images/faces/13.jpg", text: "Raja Ryder" },
]; // End Prism Code//`

export const Listgroup1 =
    `import { ListGroup } from "react-bootstrap";
import {BasicButtons} from "@/shared/data/ui-elements/listgroupdata";

{BasicButtons.map((idx,index)=>(
<ListGroup.Item as="li" key={index}>
    <div className="d-flex align-items-center">
        <span className="avatar avatar-sm">
            <Image width={28} height={28} src={idx.src} alt="img"/>
        </span>
        <div className="ms-2 fw-semibold">
            {idx.text}
        </div>
    </div>
</ListGroup.Item>
))} // End Prism Code//`;

export const reuseListgroup1 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import {BasicButtons} from "@/shared/data/ui-elements/listgroupdata";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";

<SpkListgroup as="ul">
{BasicButtons.map((idx,index) => (
        <ListGroup.Item as="li" key={index}>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-sm">
                    <Image width={28} height={28} src={idx.src} alt="img" />
                </span>
                <div className="ms-2 fw-semibold">
                    {idx.text}
                </div>
            </div>
        </ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`;


export const Listgroup2 =
    ` import { ListGroup } from "react-bootstrap";

<ListGroup as="ul">
<ListGroup.Item as="li"className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
</ListGroup.Item>
<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
</ListGroup> // End Prism Code//`;

export const reuseListgroup2 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
<SpkListgroup as="ul">
<ListGroup.Item as="li" disabled className="" aria-disabled="true">A disabled item meant to be disabled
</ListGroup.Item>
<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
</SpkListgroup>// End Prism Code//`;

export const Listgroup3 =
    `import { ListGroup } from "react-bootstrap";

<ListGroup variant='flush' className="">
<ListGroup.Item className="fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
<ListGroup.Item className="fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</ListGroup> // End Prism Code//`;

export const reuseListgroup3 =
    `
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";

<SpkListgroup Variant='flush'>
    <ListGroup.Item className="fw-semibold"><i className="ri-home-2-line fs-15 lh-1 align-center me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-cloud-line fs-15 lh-1 align-center me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-global-line fs-15 lh-1 align-center me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-stack-line fs-15 lh-1 align-center me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
    <ListGroup.Item className="fw-semibold"><i className="ri-gift-2-line fs-15 lh-1 align-center me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</SpkListgroup> // End Prism Code//`;
export const datalistgroup4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface activebtn {
        id: number
        text: string
        class: string
        class1: string
    }
    export const ActiveButtons: activebtn[] = [
        { id: 1, class: "house-door", text: "Home", class1: "active" },
        { id: 2, class: "bell", text: "Notifications", class1: "" },
        { id: 3, class: "gift", text: "Sent Messages", class1: "" },
        { id: 4, class: "person", text: "New Requests", class1: "" },
        { id: 5, class: "trash3", text: "Deleted Messages", class1: "" },
    ]; // End Prism Code//`

export const Listgroup4 =
    `  import { ListGroup } from "react-bootstrap";
import {ActiveButtons} from "@/shared/data/ui-elements/listgroupdata";

<ListGroup as="ul">
{ActiveButtons.map((idx,index) => (
    <ListGroup.Item as="li" className={'list-group-item &#{idx.class1}'} aria-current="true" key={index}>
        <div className="d-flex align-items-center">
            <div>
                <span className="fs-15">
                    <i className={'bi bi-&#{idx.class}'}></i>
                </span>
            </div>
            <div className="ms-2">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</ListGroup> // End Prism Code//`;

export const reuseListgroup4 =
    ` 
        import { ListGroup } from "react-bootstrap";
        import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
        import {ActiveButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup as="ul">
{ActiveButtons.map((idx,index) => (
    <ListGroup.Item as="li" className={list-group-item {idx.class1}} aria-current="true" key={index}>
        <div className="d-flex align-items-center">
            <div>
                <span className="fs-15">
                    <i className={bi bi-{idx.class}}></i>
                </span>
            </div>
            <div className="ms-2">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</SpkListgroup> // End Prism Code//`;

export const Listgroup5 =
    ` import { ListGroup } from "react-bootstrap";

<ListGroup className="list-group">
<ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
</ListGroup> // End Prism Code//`;

export const reuseListgroup5 =
    `import { ListGroup } from "react-bootstrap";
import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";

<SpkListgroup>
    <ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
    <ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
</SpkListgroup> // End Prism Code//`;

export const datalistgroup6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface linkbtn {
	id: number
	text: string
	text1: string
	color: string
	class: string
	class1: string
}
export const LinksButtons: linkbtn[] = [
	{ id: 1, class: "white", text: "California", class1: "active", text1: "C", color: "default" },
	{ id: 2, class: "secondary", text: "New Jersey", class1: "", text1: "N", color: "" },
	{ id: 3, class: "info", text: "Los Angeles", class1: "", text1: "L", color: "" },
	{ id: 4, class: "warning", text: "Miami Florida", class1: "", text1: "M", color: "" },
	{ id: 5, class: "success", text: "Washington D.C", class1: "disabled", text1: "W", color: "" },
]; // End Prism Code//`

export const Listgroup6 =
    `import { ListGroup } from "react-bootstrap";
    import {LinksButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup className="list-group">
    {LinksButtons.map((idx,index) => (
        <ListGroup.Item action className={'list-group-item-action &#{idx.class1}'} key={index}
            aria-current="true">
            <div className="d-flex align-items-center">
                <div>
                    <span className={'avatar avatar-xs bg-&#{idx.class} text-&#{idx.color} avatar-rounded'}>
                        {idx.text1}
                    </span>
                </div>
                <div className="ms-2">{idx.text}</div>
            </div>
        </ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`;

export const reuseListgroup6 =
    `import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {LinksButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup>
{LinksButtons.map((idx,index) => (
    <ListGroup.Item action className={'list-group-item-action {idx.class1}'} key={index}
        aria-current="true">
        <div className="d-flex align-items-center">
            <div>
                <span className={'avatar avatar-xs bg-{idx.class} text-{idx.color} avatar-rounded'}>
                    {idx.text1}
                </span>
            </div>
            <div className="ms-2">{idx.text}</div>
        </div>
    </ListGroup.Item>
))}
</SpkListgroup> // End Prism Code//`;



export const datalistgroup7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface subheading {
	id: number
	text1: string
	text2: string
	text3: string
	class: string
}
export const SubheadingsButtons: subheading[] = [
	{ id: 1, text1: "What Happened?", text2: "Many experts have recently suggested may exist.", text3: "32 Views", class: "primary-transparent" },
	{ id: 2, text1: "It Was Amazing!", text2: " His idea involved taking red.", text3: "52 Views", class: "secondary-transparent" },
	{ id: 3, text1: "News Is A Great Weapon.", text2: "News can influence in many ways.", text3: "1,204 Views", class: "success-transparent" },
	{ id: 4, text1: "majority have suffered.", text2: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.", text3: "14 Views", class: "danger-transparent" }
]; // End Prism Code//`

export const Listgroup7 =
    `import { ListGroup } from "react-bootstrap";
import {SubheadingsButtons} from "@/shared/data/ui-elements/listgroupdata";
    
    <ListGroup as="ol" numbered>
{SubheadingsButtons.map((idx,index)=>(
<ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={index}>
    <div className="ms-2 me-auto text-muted">
        <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
        {idx.text2}
    </div>
    <Badge bg={idx.class}>{idx.text3}</Badge>
</ListGroup.Item>
))}</ListGroup> // End Prism Code//`;

export const reuseListgroup7 =
    `import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {SubheadingsButtons} from "@/shared/data/ui-elements/listgroupdata";
    
<SpkListgroup as="ol" Numbered={true}>
    {SubheadingsButtons.map((idx,index) => (
        <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={index}>
            <div className="ms-2 me-auto text-muted">
                <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
                {idx.text2}
            </div>
            <SpkBadge variant={idx.class}>{idx.text3}</SpkBadge>
        </ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`;

export const Listgroup8 =
    ` import { ListGroup } from "react-bootstrap";

<ListGroup as="ol" numbered>
<ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
<ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
<ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
</ListGroup> // End Prism Code//`;

export const reuseListgroup8 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
<SpkListgroup as="ol" Numbered={true}>
    <ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
    <ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
    <ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
    <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
    <ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
    <ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
</SpkListgroup> // End Prism Code//`;


export const Listgroup9 =
    `  import { ListGroup } from "react-bootstrap";

    <ListGroup as="ul">
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        New Admin Launched.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</ListGroup> // End Prism Code//`;

export const reuseListgroup9 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";

<SpkListgroup as="ul">
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked />
    Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked />
    Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked />
    New Admin Launched.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." />
    To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</SpkListgroup> // End Prism Code//`;


export const Listgroup10 =
    `
    import { ListGroup } from "react-bootstrap";

    <ListGroup className="list-group">
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        New Admin Launched.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</ListGroup> // End Prism Code//`;

export const reuseListgroup10 =
    `
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";

<SpkListgroup>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" defaultChecked />
    Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" defaultChecked />
    Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" defaultChecked />
    Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" />
    New Admin Launched.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" />
    To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-2" type="radio" value=""
        name="list-radio" />
    To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</SpkListgroup> // End Prism Code//`;

export const datalistgroup11 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface listbtn {
	id: number
	text1: string
	text2: string
	class: string
	color: string
}
export const ListbadgesButtons: listbtn[] = [
	{ id: 1, text1: "Groceries", text2: "Available", class: "primary", color: "" },
	{ id: 2, text1: "Furniture", text2: "Buy", class: "secondary", color: "" },
	{ id: 3, text1: "Beauty", text2: "32", class: "danger", color: "" },
	{ id: 4, text1: "Books", text2: "New", class: "light", color: "text-default" },
	{ id: 5, text1: "Toys", text2: "Hot", class: "info-gradient", color: "" },
	{ id: 6, text1: "Mobiles", text2: "Sold Out", class: "warning", color: "" },
]; // End Prism Code//`

export const Listgroup11 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import {ListbadgesButtons} from "@/shared/data/ui-elements/listgroupdata";

    {ListbadgesButtons.map((idx,index) => (
    <ListGroup.Item key={index}
        className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
        {idx.text1}
        <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
    </ListGroup.Item>
    ))} // End Prism Code//`;

export const reuseListgroup11 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {ListbadgesButtons} from "@/shared/data/ui-elements/listgroupdata";

 <SpkListgroup as="ul">
    {ListbadgesButtons.map((idx,index) => (
        <ListGroup.Item as="li" key={index}
            className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            {idx.text1}
            <SpkBadge variant={idx.class} Customclass={idx.color}>{idx.text2}</SpkBadge>
        </ListGroup.Item>
    ))}
</SpkListgroup>// End Prism Code//`;

export const datalistgroup12 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface horizontal {
        id: number
        class: string
    }
    export const HorizontalButtons: horizontal[] = [
        { id: 1, class: "" },
        { id: 2, class: "-sm" },
        { id: 3, class: "-md" },
        { id: 4, class: "-lg" },
        { id: 5, class: "-xl" },
        { id: 6, class: "-xxl" },
    ]; // End Prism Code//`

export const Listgroup12 =
    ` 
import { ListGroup } from "react-bootstrap";
import {HorizontalButtons} from "@/shared/data/ui-elements/listgroupdata";

{HorizontalButtons.map((idx,index) => (
    <ListGroup as="ul" className={'list-group-horizontal &#{idx.class} mb-3'} key={index}>
        <ListGroup.Item as="li">An item</ListGroup.Item>
        <ListGroup.Item as="li">A second item</ListGroup.Item>
        <ListGroup.Item as="li">A third item</ListGroup.Item>
    </ListGroup>
))} // End Prism Code//`;

export const reuseListgroup12 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {HorizontalButtons} from "@/shared/data/ui-elements/listgroupdata";

{HorizontalButtons.map((idx,index) => (
    <SpkListgroup as="ul" CustomClass={list-group-horizontal{idx.class} mb-2} key={index}>
        <ListGroup.Item as="li">An item</ListGroup.Item>
        <ListGroup.Item as="li">A second item</ListGroup.Item>
        <ListGroup.Item as="li">A third item</ListGroup.Item>
    </SpkListgroup>
))} // End Prism Code//`;

export const datalistgroup13 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//interface custombtn {
        id: number
        heading: string
        text1: string
        text2: string
        text3: string
        class1: string
        class2: string
        color: string;
    }
    export const CustomButtons: custombtn[] = [
        { id: 1, heading: "Web page editors now use Lorem Ipsum?", text1: "3 days ago", class1: "active", text2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.", text3: "24,Nov 2022", class2: "", color: "text-fixed-black" },
        { id: 2, heading: "Richard McClintock, a Latin professor?", text1: "4 hrs ago", class1: "", text2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.", text3: "30,Nov 2022.", class2: "text-muted", color: "" },
        { id: 3, heading: "It uses a dictionary of over 200 Latin words?", text1: "15 hrs ago", class1: "", text2: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.", text3: "4,Nov 2022.", class2: "text-muted", color: "" },
        { id: 4, heading: "The standard Lorem Ipsum used since the 1500s?", text1: "45 mins ago", class1: "", text2: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", text3: "28,Oct 2022.", class2: "text-muted", color: "" },
    ]; // End Prism Code//`

export const Listgroup13 =
    ` import { ListGroup } from "react-bootstrap";
import {CustomButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup className="list-group">
    {CustomButtons.map((idx,index) => (
        <ListGroup.Item action className={'list-group-item-action &#{idx.class1}'} key={index}
            aria-current="true">
            <div className="d-flex w-100 justify-content-between gap-1">
                <h6 className={'mb-1 fw-semibold &#{idx.color}'}>{idx.heading}</h6>
                <small className={idx.class2}>{idx.text1}</small>
            </div>
            <p className="mb-1">{idx.text2}</p>
            <small>{idx.text3}.</small>
        </ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`;

export const reuseListgroup13 =
    ` import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {CustomButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup>
    {CustomButtons.map((idx,index) => (
        <ListGroup.Item action className={list-group-item-action {idx.class1}} key={index}
            aria-current="true">
            <div className="d-flex w-100 justify-content-between gap-1">
                <h6 className={mb-1 fw-semibold {idx.color}}>{idx.heading}</h6>
                <small className={idx.class2}>{idx.text1}</small>
            </div>
            <p className="mb-1">{idx.text2}</p>
            <small>{idx.text3}.</small>
        </ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`;

export const datalistgroup14 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface contextualbtn {
	id: number
	text: string
	class: string
	class1: string
}
export const ContextualButtons: contextualbtn[] = [
	{ id: 1, text: "A simple default list group item", class: "light", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; // End Prism Code//`

export const Listgroup14 =
    `
    import { ListGroup } from "react-bootstrap";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item className={'list-item-solid-&#{idx.class} &#{idx.class1}'} as="li" key={index}>{idx.text}</ListGroup.Item>
    ))}

</ListGroup> // End Prism Code//`;

export const reuseListgroup14 =
    `
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item className={list-item-solid-{idx.class} {idx.class1}} as="li" key={index}>{idx.text}</ListGroup.Item>
    ))}
</SpkListgroup> // End Prism Code//`;


export const datalistgroup15 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface contextualbtn {
	id: number
	text: string
	class: string
	class1: string
}
export const ContextualButtons: contextualbtn[] = [
	{ id: 1, text: "A simple default list group item", class: "light", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; // End Prism Code//`

export const Listgroup15 =
    ` 
    import { ListGroup } from "react-bootstrap";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

    <ListGroup>
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={index}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`;

export const reuseListgroup15 =
    ` 
    import { ListGroup } from "react-bootstrap";
    import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
    import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

<ListGroup>
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={index}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`;

export const Listgroup16 =
    `
import { ListGroup } from "react-bootstrap";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";
    <ListGroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item as="li" variant={idx.class} key={index}>{idx.text}</ListGroup.Item>
    ))}
</ListGroup> // End Prism Code//`;

export const reuseListgroup16 =
    `
import { ListGroup } from "react-bootstrap";
import SpkListgroup from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-listgroup";
import {ContextualButtons} from "@/shared/data/ui-elements/listgroupdata";

<SpkListgroup as="ul">
    {ContextualButtons.map((idx,index) => (
        <ListGroup.Item as="li" variant={idx.class} key={index}>{idx.text}</ListGroup.Item>
    ))}
</SpkListgroup>// End Prism Code//`;

export const datalistgroup16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
interface contextualbtn {
	id: number
	text: string
	class: string
	class1: string
}
export const ContextualButtons: contextualbtn[] = [
	{ id: 1, text: "A simple default list group item", class: "light", class1: "" },
	{ id: 2, text: "A simple primary list group item", class: "primary", class1: "" },
	{ id: 3, text: "A simple secondary list group item", class: "secondary", class1: "" },
	{ id: 4, text: "A simple success list group item", class: "success", class1: "" },
	{ id: 5, text: "A simple danger list group item", class: "danger", class1: "" },
	{ id: 6, text: "A simple warning list group item", class: "warning", class1: "" },
	{ id: 7, text: "A simple info list group item", class: "info", class1: "" },
	{ id: 8, text: "A simple light list group item", class: "light", class1: "" },
	{ id: 9, text: "A simple dark list group item", class: "dark", class1: "text-white" }
]; // End Prism Code//`

// end Listgroup

// objectfit
export const objectfit3 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-contain border rounded" alt="..."/> // End Prism Code//`;

export const objectfit4 =
    `<Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-cover border rounded" alt="..."/> // End Prism Code//`;

export const objectfit1 =
    `<Image fill src="../../../assets/images/media/media-28.jpg"
className="object-fit-fill border rounded" alt="..."/> // End Prism Code//`;

export const objectfit2 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg"
className="object-fit-scale border rounded" alt="..."/> // End Prism Code//`;

export const objectfit5 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-none border rounded" alt="..."/> // End Prism Code//`;

export const objectfit6 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-sm-contain border
 rounded" alt="..."/> // End Prism Code//`;

export const objectfit7 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-md-contain border 
rounded" alt="..."/> // End Prism Code//`;

export const objectfit8 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-lg-contain border 
rounded" alt="..."/> // End Prism Code//`;

export const objectfit9 =
    `<Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-xl-contain border 
rounded" alt="..."/> // End Prism Code//`;

export const objectfit10 =
    ` <Image fill src="../../../assets/images/media/media-28.jpg" 
className="object-fit-xxl-contain border
 rounded" alt="..."/> // End Prism Code//`;

export const objectfit11 =
    ` <video src="../../../assets/video/1.mp4" 
className="object-fit-contain rounded border" autoPlay>
</video> // End Prism Code//`;

export const objectfit12 =
    ` <video src="../../../assets/video/1.mp4"
className="object-fit-cover rounded border" autoPlay>
</video> // End Prism Code//`;

export const objectfit13 =
    `<video src="../../../assets/video/1.mp4"
className="object-fit-fill rounded border" autoPlay>
</video> // End Prism Code//`;

export const objectfit14 =
    `<video src="../../../assets/video/1.mp4" 
className="object-fit-scale rounded border" autoPlay>
</video> // End Prism Code//`;

export const objectfit15 =
    ` <video src="../../../assets/video/1.mp4"
className="object-fit-none 
rounded border" autoPlay></video> // End Prism Code//`;

// end objectfit

// Pagination

export const pagination1 =
    `<nav aria-label="Page navigation">
<Pagination as="ul" className="pagination mb-0">
<Pagination.Item as="li" disabled href="#!" scroll={false}>Previous
</Pagination.Item>
<Pagination.Item as="li" href="#!" scroll={false}>1</Pagination.Item>
<Pagination.Item as="li" href="#!" scroll={false}>2</Pagination.Item>
<Pagination.Item as="li" href="#!" scroll={false}>Next</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination2 =
    `<Pagination className="mb-0">
       <Pagination.Item className="disabled">Prev</Pagination.Item>
       <Pagination.Item className="active">1</Pagination.Item>
       <Pagination.Item className="">2</Pagination.Item>
       <Pagination.Item className="">3</Pagination.Item>
       <Pagination.Item className=""><span aria-hidden="true"><i className="bx bx-chevron-right"></i></span></Pagination.Item>
   </Pagination> // End Prism Code//`;
export const pagination3 =
    `<nav aria-label="..." className="me-3">
<Pagination className="pagination">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item  href="#!" scroll={false}>1</Pagination.Item>
    <Pagination.Item active  aria-current="page"href="#!" scroll={false}>2
    </Pagination.Item>
    <Pagination.Item  href="#!" scroll={false}>Next
    </Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item  href="#!" scroll={false}>1</Pagination.Item>
    <Pagination.Item active aria-current="page">2
    </Pagination.Item>
    <Pagination.Item  href="#!" scroll={false}>Next
    </Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination4 =
    `<nav aria-label="Page navigation">
<Pagination className="justify-content-center">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item href="#!" scroll={false}>1</Pagination.Item>
    <Pagination.Item href="#!" scroll={false}>2</Pagination.Item>
    <Pagination.Item href="#!" scroll={false}>3</Pagination.Item>
    <Pagination.Item  href="#!" scroll={false}>Next
    </Pagination.Item>
</Pagination>
</nav>
<nav aria-label="Page navigation">
<Pagination className="justify-content-end mb-0">
    <Pagination.Item disabled >Previous
    </Pagination.Item>
    <Pagination.Item href="#!" scroll={false}>1</Pagination.Item>
    <Pagination.Item href="#!" scroll={false}>2</Pagination.Item>
    <Pagination.Item href="#!" scroll={false}>3</Pagination.Item>
    <Pagination.Item  href="#!" scroll={false}>Next
    </Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination5 =
    `<nav aria-label="...">
<Pagination as="ul" className="pagination pagination-sm mb-0">
	<Pagination.Item as="li" active aria-current="page">
		1
	</Pagination.Item>
	<Pagination.Item as="li" href="#!" scroll={false}>2</Pagination.Item>
	<Pagination.Item as="li" href="#!" scroll={false}>3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination as="ul" className="pagination mb-0">
	<Pagination.Item as="li" active aria-current="page">
		1
	</Pagination.Item>
	<Pagination.Item as="li" href="#!" scroll={false}>2</Pagination.Item>
	<Pagination.Item as="li" href="#!" scroll={false}>3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination pagination-lg mb-0">
	<Pagination.Item as="li" className=" active" aria-current="page">
		1
	</Pagination.Item>
	<Pagination.Item as="li" href="#!" scroll={false}>2</Pagination.Item>
	<Pagination.Item as="li" href="#!" scroll={false}>3</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination6 =
    `<nav aria-label="Page navigation" className="pagination-style-1">
<Pagination className="pagination mb-0">
<Pagination.Item disabled href="#!" scroll={false}>
<i className="ri-arrow-left-s-line align-middle"></i>       
</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>1</Pagination.Item>
<Pagination.Item active href="#!" scroll={false}>2</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>
<i className="bi bi-three-dots"></i>
</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>21</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>
<i className="ri-arrow-right-s-line align-middle"></i>
</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination7 =
    `<nav aria-label="Page navigation" className="pagination-style-1">
<Pagination className="pagination mb-0">
<Pagination.Item disabled href="#!" scroll={false}>
<i className="ri-arrow-left-s-line align-middle"></i>       
</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>1</Pagination.Item>
<Pagination.Item active href="#!" scroll={false}>2</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>
<i className="bi bi-three-dots"></i>
</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>21</Pagination.Item>
<Pagination.Item href="#!" scroll={false}>
<i className="ri-arrow-right-s-line align-middle"></i>
</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination8 =
    `<nav aria-label="Page navigation" className="pagination-style-3">
<Pagination className=" mb-0 flex-wrap">
<Pagination.Item as="li" disabled>Prev
</Pagination.Item>
<Pagination.Item as="li"  active href="#!" scroll={false}>1</Pagination.Item>
<Pagination.Item as="li"  href="#!" scroll={false}>2</Pagination.Item>
<Pagination.Item as="li"  href="#!" scroll={false}>
<i className="bi bi-three-dots"></i>        
</Pagination.Item>
<Pagination.Item as="li"  href="#!" scroll={false}>16</Pagination.Item>
<Pagination.Item as="li" className="pagination-next"
href="#!" scroll={false}>next
</Pagination.Item>
</Pagination>
</nav> // End Prism Code//`;

export const pagination9 =
    `<nav aria-label="Page navigation"className="pagination-style-4">
<Pagination className="mb-0 flex-wrap">
<Pagination.Item as="li"  disabled href="#!" scroll={false}>
 Prev
</Pagination.Item>
<Pagination.Item as="li"  active href="#!" scroll={false}>1</Pagination.Item>
<Pagination.Item as="li" href="#!" scroll={false}>2</Pagination.Item>
<Pagination.Item as="li"  href="#!" scroll={false}>
<i className="bi bi-three-dots"></i>   
</Pagination.Item>
<Pagination.Item as="li" href="#!" scroll={false}>16</Pagination.Item>
<Pagination.Item as="li" href="#!" scroll={false}>17</Pagination.Item>
<Pagination.Item as="li" className="pagination-next" href="#!" scroll={false}>
 next       
</Pagination.Item>
</Pagination></nav> // End Prism Code//`;

//Popovers
export const datapopover1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface defaultalerts {
	id: number
	text: string
	class: string
}
export const Defaultalerts: defaultalerts[] = [
	{ id: 1, text: "Top", class: "top" },
	{ id: 2, text: "Right", class: "auto" },
	{ id: 3, text: "Bottom", class: "bottom" },
	{ id: 4, text: "Left", class: "left" },
]; // End Prism Code//`
export const popovers1 =
    `
    import { Defaultalerts } from "@/shared/data/ui-elements/alertsdata";
    import { Button, OverlayTrigger, Popover } from "react-bootstrap";

    {Defaultalerts.map((idx,index)=>(
    <SpkTooltips trigger="click" placement={idx.class}  key={index}
    overlay={<Popover>
    <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
    <Popover.Body>
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
    </Popover.Body>
    </Popover>}>
    <SpkButton Buttonvariant='' Navigate="#!" scroll={false} Customclass="btn btn-outline-primary">Popover {idx.text}</SpkButton>
    </SpkTooltips>))} // End Prism Code//`;

export const reusablepopover1 = `
{Defaultalerts.map((idx) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} title={'Popover &#60{idx.text}'} content={'And here's some amazing content. It's very engaging. &#60{idx.text}?'}>
        <SpkButton Buttonvariant='outline-primary'>Popover {idx.text}</SpkButton>
    </SpkPopovers>
))}`

export const datapopover2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    interface colorheader {
        id: number
        text: string
        class: string
        color: string
        color1: string
        color2: string
    }
    export const Colorheaderalerts: colorheader[] = [
        { id: 1, text: "Primary", class: "top", color: "outline-primary", color1: "primary", color2: "" },
        { id: 2, text: "Secondary", class: "right", color: "outline-secondary", color1: "secondary", color2: "" },
        { id: 3, text: "Info", class: "bottom", color: "outline-info", color1: "info", color2: "bs-popover-auto" },
        { id: 4, text: "Warning", class: "left", color: "outline-warning", color1: "warning", color2: "" },
        { id: 4, text: "Success", class: "top", color: "outline-success", color1: "success", color2: "" },
        { id: 4, text: "Danger", class: "top", color: "outline-danger", color1: "danger", color2: "" },
    ]; // End Prism Code//`
export const popovers2 =
    `
    import { Colorheaderalerts } from "@/shared/data/ui-elements/alertsdata";
    import { Button, OverlayTrigger, Popover } from "react-bootstrap";

   <div className="btn-list">
							{Colorheaderalerts.map((idx) => (
								<SpkTooltips trigger="click" placement={idx.class} key={index}
									overlay={<Popover className={'header-&#{idx.color1} &#{idx.color2}'}>
										<Popover.Header as="h3" data-bs-custom-classname={'header-&#{idx.color1}''}> Color Header</Popover.Header>
										<Popover.Body>
											Popover with primary header.
										</Popover.Body>
									</Popover>}>
									<SpkButton Buttonvariant={idx.color}>Header {idx.text}</SpkButton>
								</SpkTooltips>
							))}
						</div> // End Prism Code//`;

export const reusablepopover2 = `
{Colorheaderalerts.map((idx) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} popoverClass={'header-&#60{idx.color1} &#60{idx.color2}'} title="Color Header" content={;Popover with &#60{idx.color1} header.'} data-bs-custom-classname={'header-&#60{idx.color1}'}>
        <SpkButton Buttonvariant={idx.color}>Header {idx.text}</SpkButton>
    </SpkPopovers>
))}`

export const datapopover3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//interface coloralerts {
      id: number
      text: string
      class: string
      color1: string
  }
  export const Colredalerts: coloralerts[] = [
      { id: 1, text: "Primary", class: "top", color1: "primary" },
      { id: 2, text: "Secondary", class: "right", color1: "secondary" },
      { id: 3, text: "Info", class: "bottom", color1: "info" },
      { id: 4, text: "Warning", class: "left", color1: "warning" },
      { id: 5, text: "Success", class: "top", color1: "success" },
      { id: 6, text: "Danger", class: "right", color1: "danger" },
      { id: 7, text: "Teal", class: "bottom", color1: "teal" },
      { id: 8, text: "Purple", class: "left", color1: "purple" },
  ]; // End Prism Code//`
export const popovers3 =
    `
    import { Colredalerts } from "@/shared/data/ui-elements/alertsdata";
    import { Button, OverlayTrigger, Popover } from "react-bootstrap";

    <div className="btn-list">
    {Colredalerts.map((idx) => (
        <SpkTooltips key={index} placement={idx.class} trigger="click" overlay={<Popover className={'popover-&#{idx.color1}'}>
            <Popover.Header as="h3">Color Background</Popover.Header>
            <Popover.Body>Popover with {idx.text} background.</Popover.Body>
        </Popover>}>
            <SpkButton Buttonvariant={idx.color1}>{idx.text} </SpkButton>
        </SpkTooltips>
    ))}
</div> // End Prism Code//`;

export const reusablepopover3 = `
{Colredalerts.map((idx) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} popoverClass={'popover-&#60{idx.color1}'} title="Color Background" content={'Popover with &#60{idx.text} background.'}>
        <SpkButton Buttonvariant={idx.color1}>{idx.text} </SpkButton>
    </SpkPopovers>
))}`

export const popovers4 =
    `
    import { Colredalerts } from "@/shared/data/ui-elements/alertsdata";
    import { Button, OverlayTrigger, Popover } from "react-bootstrap";

    <div className="btn-list">
    {Colredalerts.map((idx) => (
        <SpkTooltips key={index} placement={idx.class} trigger="click" overlay={<Popover className={'popover-&#{idx.color1}-light'} id="tooltip-disabled">
            <Popover.Header as="h3">Light Background</Popover.Header>
            <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
        </Popover>}>
            <SpkButton Buttonvariant='' Customclass={'btn btn-&#{idx.color1}-light btn-wave'}>{idx.text} </SpkButton>
        </SpkTooltips>
    ))}
</div> // End Prism Code//`;
export const reusablepopover4 = `
{Colredalerts.map((idx) => (
    <SpkPopovers trigger="click" placement={idx.class} key={index} popoverClass={'popover-&#60{idx.color1}-light'} title="Light Background" content={'Popover with light &#60{idx.text} background.'}>
        <SpkButton Buttonvariant='' Customclass={'btn btn-&#60{idx.color1}-light btn-wave'}>{idx.text} </SpkButton>
    </SpkPopovers>
))}`

export const popovers5 =
    `<SpkTooltips placement='right' overlay={<Popover id="tooltip-disabled">
<Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
<span className="d-inline-block mb-3 mb-sm-1 me-2">
    <SpkButton Buttonvariant="primary" Disabled={true}>
        Disabled button
    </SpkButton>
</span>
</SpkTooltips>
 // End Prism Code//`;

export const reusablepopover5 = `
 <SpkPopovers placement="right" content="Disabled Popover!">
 <span className="d-inline-block mb-3 mb-sm-1 me-2">
     <SpkButton Buttonvariant="primary" Disabled={true}>
         Disabled button
     </SpkButton>
 </span>
</SpkPopovers>`

export const popovers6 =
    `<SpkTooltips placement='top' trigger="click" overlay={<Popover className='popover-primary only-body' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" href="#!" scroll={false}>
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary"
     height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 
        2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 
        .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
</Link>
</SpkTooltips>
<SpkTooltips placement='top' trigger="click" overlay={<Popover 
   className='popover-secondary only-body' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" href="#!" scroll={false} >
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" 
    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 
    18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
</Link>
</SpkTooltips>
<SpkTooltips placement='top' trigger="click" overlay={<Popover 
   className='popover-primary only-body' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" href="#!" scroll={false}>
<span className="avatar avatar-md br-5 bg-warning-transparent text-warning ">
            <i className="fe fe-box"></i></span>
</Link>
</SpkTooltips>
<SpkTooltips placement='top' trigger="click" overlay={<Popover
    className='popover-secondary only-body' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" href="#!" scroll={false} >
<span className="avatar avatar-md br-5 bg-teal-transparent text-teal ">
            <i className="fe fe-zap"></i></span>
</Link>
</SpkTooltips> // End Prism Code//`;

export const reusablepopover6 = `
<SpkPopovers trigger="click" placement="top" popoverClass="popover-primary only-body" content="This popover is used to provide details about this icon." >
<Link className="me-4 svg-primary" href="#!" scroll={false}>
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
</Link>
</SpkPopovers>
<SpkPopovers trigger="click" placement="left" popoverClass="popover-secondary only-body" content="This popover is used to provide details about this icon." >
<Link className="me-4 svg-secondary" href="#!" scroll={false} >
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
</Link>
</SpkPopovers>`

export const datapopover7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface dismiss {
	id: number
	color: string
	class: string
}
export const Dismissiblealerts: dismiss[] = [
	{ id: 1, color: "primary", class: "top" },
	{ id: 2, color: "secondary", class: "right" },
	{ id: 3, color: "info", class: "bottom" },
	{ id: 4, color: "warning", class: "left" },
]; // End Prism Code//`
export const popovers7 =
    `
    import { Dismissiblealerts } from "@/shared/data/ui-elements/alertsdata";
    import { Button, OverlayTrigger, Popover } from "react-bootstrap";

    {Dismissiblealerts.map((idx,index) => (
	<SpkTooltips rootClose={true} trigger="click" placement={idx.class} key={index}
		overlay={<Popover>
			<Popover.Header as="h3"> Dismissible Popover</Popover.Header>
			<Popover.Body>
				And here's some amazing content. It's very engaging. Right?
			</Popover.Body>
		</Popover>}>
		<SpkButton Buttonvariant={idx.color}>Popover Dismiss</SpkButton>
	</SpkTooltips>
))} // End Prism Code//`;

export const reusablepopover7 = `
{Dismissiblealerts.map((idx) => (
    <SpkPopovers trigger="click" rootClose={true} placement={idx.class} key={index} title="Dismissible Popover" content={'And here's some amazing content. It's very engaging. &#60{idx.class}?'}>
        <SpkButton Buttonvariant={idx.color} Customclass="m-1">Popover Dismiss</SpkButton>
    </SpkPopovers>
))}`

// Progress

export const progress1 =
    `<ProgressBar variant="" now={0} className="progress mb-3" />
<ProgressBar variant="" now={25} className="progress mb-3" />
<ProgressBar variant="" now={50} className="progress mb-3" />
<ProgressBar variant="" now={75} className="progress mb-3" />
<ProgressBar variant="" now={100} className="progress mb-0" /> // End Prism Code//`;

export const reusableprogress1 = `
	{progressdata.map((idx,index) => (
    <SpkProgress key={index} variant="primary" now={idx.data} mainClass="progress mb-3" />
))}`

export const progress2 =
    `<ProgressBar striped variant='primary' now={10} className="progress mb-3" />
<ProgressBar striped variant='secondary' now={25} className="progress mb-3" />
<ProgressBar striped variant='success' now={50} className="progress mb-3" />
<ProgressBar striped variant='info' now={75} className="progress mb-3" />
<ProgressBar striped variant='warning' now={100} className="progress mb-0" /> // End Prism Code//`;

export const reusableprogress2 = `
{Stripeddata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} striped={true} now={idx.data} mainClass="progress mb-3" />
))}`

export const progress3 =
    `<ProgressBar variant='primary' now={10} label={10} className="progress mb-3" />
<ProgressBar variant='secondary' now={20} label={20} className="progress mb-3" />
<ProgressBar variant='success' now={40} label={40%} className="progress mb-3" />
<ProgressBar variant='info' now={60} label={60}% className="progress mb-3" />
<ProgressBar variant='warning' now={80} label={80%} className="progress mb-0" /> // End Prism Code//`;

export const reusableprogress3 = `
{Stripeddata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} label={'&#60{idx.data}%'} now={idx.data} mainClass="progress mb-3" />
))}`

export const dataprogress4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface multiple {
    now1: number
    now2: number
    now3: number
    size: string
    class1: string
    class2: string
    class3: string
}
export const Multipleprogress: multiple[] = [
    { class1: "primary", class2: "secondary", class3: "success", now1: 5, now2: 10, now3: 15, size: "xs" },
    { class1: "warning", class2: "info", class3: "danger", now1: 10, now2: 15, now3: 20, size: "sm" },
    { class1: "info", class2: "success", class3: "primary", now1: 15, now2: 20, now3: 25, size: "" },
    { class1: "purple", class2: "teal", class3: "orange", now1: 20, now2: 25, now3: 30, size: "lg" },
    { class1: "success", class2: "danger", class3: "warning", now1: 25, now2: 30, now3: 35, size: "xl" },

]; // End Prism Code//`

export const reusableprogress4 = `
{Multipleprogress.map((idx,index) => (
    <ProgressBar className={'progress-stacked progress-&#60{idx.size} mb-3'} key={index}>
        <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
        <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
        <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
    </ProgressBar>
))}`
export const progress4 =
    `
    import { Multipleprogress } from "@/shared/data/ui-elements/progressdata";
    import { ProgressBar } from "react-bootstrap";

    {Multipleprogress.map((idx,index) => (
        <ProgressBar className={'progress-stacked progress-&#{idx.size} mb-3'} key={index}>
            <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
            <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
            <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
        </ProgressBar>
    ))} // End Prism Code//`;

export const progress5 =
    `<ProgressBar  variant='primary' now={10} className="progress progress-xs mb-3" />
<ProgressBar  variant='primary' now={25} className="progress progress-sm mb-3" />
<ProgressBar  variant='primary' now={50} className="progress  mb-3" />
<ProgressBar  variant='primary' now={75} className="progress progress-lg mb-3" />
<ProgressBar  variant='primary' now={100}className="progress progress-xl mb-0" /> // End Prism Code//`;

export const reusableprogress5 = `
{Heightdata.map((idx,index) => (
    <SpkProgress key={index} variant="primary" now={idx.data} mainClass={idx.class} />
))}`

export const progress6 =
    `<ProgressBar  variant='secondary' now={20} className="progress mb-3" />
<ProgressBar  variant='warning' now={40} className="progress mb-3" />
<ProgressBar  variant='info' now={60} className="progress mb-3" />
<ProgressBar  variant='success' now={80} className="progress mb-3" />
<ProgressBar  variant='danger' now={100} className="progress mb-0" /> // End Prism Code//`;

export const reusableprogress6 = `	{Coloreddata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} now={idx.data} mainClass="progress mb-3" />
))}`

export const progress7 =
    `<div className="progress progress-sm progress-custom mb-5 progress-animate">
<h6 className="progress-bar-title">Mobiles</h6>
<div className='progress-bar bg-primary custom-height1' style={{width: "50%"}}>
    <div className='progress-bar-value bg-primary'>50%</div>
</div>
</div>
<div className="progress progress-sm progress-custom mb-5 progress-animate">
<h6 className="progress-bar-title">Mobiles</h6>
<div className='progress-bar bg-secondary custom-height1' style={{width: "60%"}}>
    <div className='progress-bar-value bg-secondary'>50%</div>
</div>
</div>
<div className="progress progress-sm progress-custom mb-5 progress-animate">
<h6 className="progress-bar-title">Mobiles</h6>
<div className='progress-bar bg-success custom-height1' style={{width: "70%"}}>
    <div className='progress-bar-value bg-success'>50%</div>
</div>
</div> // End Prism Code//`;

export const reusableprogress7 = `
{CustomProgress2data.map((idx,index) => (
    <div className={'progress progress-bar progress-sm &#60{idx.class3}'} key={index} >
        <div className={'progress-item-1 bg-&#60{idx.class}'}></div>
        <div className={'progress-item-2 bg-&#60{idx.class2}'}></div>
        <div className={'progress-item-3 bg-&#60{idx.class1}'}></div>
        <ProgressBar variant={idx.class} now={idx.now} />
    </div>
))}`
export const dataprogress8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
interface custom2 {
    now: number
    class: string
    class1: string
    class2: string
    class3:string
}
export const CustomProgress2data: custom2[] = [
    { class: "primary", now: 50, class1: "", class2: "", class3:"mb-4" },
    { class: "secondary", now: 60, class1: "", class2: "secondary", class3:"mb-4" },
    { class: "success", now: 70, class1: "", class2: "success", class3:"mb-4" },
    { class: "info", now: 80, class1: "info", class2: "info", class3:"mb-4" },
    { class: "warning", now: 90, class1: "warning", class2: "warning", class3:"" },
]; // End Prism Code//`
export const progress8 =
    `	
    import { CustomProgress2data } from "@/shared/data/ui-elements/progressdata";
    import { ProgressBar } from "react-bootstrap";

    {CustomProgress2data.map((idx,index) => (
        <div className={'progress progress-bar progress-sm &#{idx.class3}'} key={index} >
            <div className={'progress-item-1 bg-&#{idx.class}'}></div>
            <div className={'progress-item-2 bg-&#{idx.class2}'}></div>
            <div className={'progress-item-3 bg-&#{idx.class1}'}></div>
            <ProgressBar variant={idx.class} now={idx.now} />
        </div>
    ))} // End Prism Code//`;

export const progress9 =
    `<ProgressBar className="progress progress-lg mb-5 custom-progress-3 progress-animate">

<ProgressBar variant="" now={50} />
<div className="progress-bar-value">50%</div>

</ProgressBar>
<ProgressBar className="progress progress-lg mb-5 custom-progress-3 progress-animate">
<ProgressBar variant="secondary" now={60} />
<div className="progress-bar-value secondary">60%</div>
</ProgressBar>
<ProgressBar className="progress progress-lg custom-progress-3 progress-animate">
<ProgressBar variant="success" now={70} />
<div className="progress-bar-value success">70%</div>
</ProgressBar> // End Prism Code//`;

export const progress10 =
    `<ProgressBar className="progress progress-xl mb-3 progress-animate custom-progress-4">
<ProgressBar variant='secondary-gradient' now={20} />
<div className="progress-bar-label">20%</div>
</ProgressBar> // End Prism Code//`;

export const progress11 =
    `<h6 className="fw-semibold mb-2">Project Dependencies</h6>
<ProgressBar className="progress-stacked progress-xl mb-5" >
   <ProgressBar  variant="primary" now={25} label={25%} key={1} />
   <ProgressBar  variant="secondary" now={35} label={35%} key={2} />
   <ProgressBar  variant="danger" now={40} label={40%} key={3} />    
</ProgressBar>
<Row className="justify-content-center">
    <Col xl={5}>
        <div className="border p-3">
            <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%<
            /span></p>
            <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="primary" now={25} />   
            <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%
            </span></p>
            <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="secondary" now={35} />  
            <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%
            </span></p>
            <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="danger" now={40} />  
        </div>
    </Col>
</Row> // End Prism Code//`;

export const progress12 =
    `<ProgressBar  variant='primary-gradient' className="progress mb-3" animated now={10} />
<ProgressBar  variant='secondary-gradient' className="progress mb-3" animated now={20} />
<ProgressBar  variant='success-gradient' className="progress mb-3" animated now={40} />
<ProgressBar  variant='info-gradient' className="progress mb-3" animated now={60} />
<ProgressBar  variant='warning-gradient' className="progress" animated now={80} /> // End Prism Code//`;

export const reusableprogress12 = `
	{Animatedata.map((idx,index) => (
    <SpkProgress key={index} variant={'&#60{idx.color}-gradient'} mainClass={'progress &#60{idx.class}'} animated={true} now={idx.data} />
))}`

export const progress13 =
    `<ProgressBar  variant='primary' className="progress mb-3" animated now={10} />
<ProgressBar  variant='secondary' className="progress mb-3" animated now={20} />
<ProgressBar  variant='success' className="progress mb-3" animated now={40} />
<ProgressBar  variant='info' className="progress mb-3" animated now={60} />
<ProgressBar  variant='warning' className="progress" animated now={80} /> // End Prism Code//`;

export const reusable13 = `
{Animatedata.map((idx,index) => (
    <SpkProgress key={index} variant={idx.color} mainClass={'progress &#60{idx.class}'} animated={true} now={idx.data} />
))}`

export const progress14 =
    `<ProgressBar  variant='primary-gradient' className="progress mb-3 progress-animate" animated now={10} />
<ProgressBar  variant='secondary-gradient' className="progress mb-3 progress-animate" animated now={20} />
<ProgressBar  variant='success-gradient' className="progress mb-3 progress-animate" animated now={40} />
<ProgressBar  variant='info-gradient' className="progress mb-3 progress-animate" animated now={60} />
<ProgressBar  variant='warning-gradient' className="progress  progress-animate" animated now={80} /> // End Prism Code//`;

export const reusableprogress14 = `
{Animatedata.map((idx,index) => (
    <SpkProgress key={index} variant={'&#60{idx.color}-gradient'} mainClass={'progress progress-animate &#60{idx.class}'} animated={true} now={idx.data} />
))}`

//spinners

export const dataspinner1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface colorspinner {
	id: number
	color: string
}

export const Colorspinner: colorspinner[] = [
	{ id: 1, color: "primary" },
	{ id: 2, color: "secondary" },
	{ id: 3, color: "success" },
	{ id: 4, color: "danger" },
	{ id: 5, color: "warning" },
	{ id: 6, color: "info" },
	{ id: 7, color: "light" },
	{ id: 8, color: "dark" }
]; // End Prism Code//`
export const spinner1 =
    `
import { Colorspinner } from "@/shared/data/ui-elements/spinnersdata";
    
    {Colorspinner.map((idx,index) => (
        <div className={'spinner-border me-2 text-&#{idx.color}'} role="status" key={index}>
            <span className="visually-hidden">Loading...</span>
        </div>
    ))} // End Prism Code//`;

export const spinner2 =
    `{Colorspinner.map((idx,index) => (
        <div className={'spinner-grow me-1 text-&#{idx.color}'} role="status" key={index}>
            <span className="visually-hidden">Loading...</span>
        </div>
    ))} // End Prism Code//`;

export const spinner3 =
    `<div className="spinner-grow text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div> // End Prism Code//`;

export const spinner4 =
    `  <div className="spinner-border  text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div> // End Prism Code//`;

export const spinner5 =
    `<div className="d-flex justify-content-center mb-4">
<div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
<div className="d-flex align-items-center">
<strong>Loading...</strong>
<div className="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
</div> // End Prism Code//`;

export const spinner6 =
    ` <div className="clearfix mb-4">
<div className="spinner-border text-primary float-end" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
<div className="clearfix">
<div className="spinner-border text-primary float-start" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div> // End Prism Code//`;

export const dataspinner7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface btnspinner {
	id: number
	color: string
	class: string
}
export const Buttonspinner: btnspinner[] = [
	{ id: 1, color: "primary-light", class: "" },
	{ id: 2, color: "secondary-light", class: "" },
	{ id: 3, color: "success-light", class: "" },
	{ id: 4, color: "info-light", class: "" },
	{ id: 5, color: "warning-light", class: "" },
	{ id: 6, color: "danger-light", class: "" },
	{ id: 7, color: "light", class: "" },
	{ id: 8, color: "dark", class: "text-dark" }
]; // End Prism Code//`
export const spinner7 =
    ` <div className="btn-list">
<SpkButton variant='primary-light' className="btn" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
</SpkButton>
<SpkButton variant='primary-light' className="btn" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    Loading...
</SpkButton>
<SpkButton variant='primary-light' className="btn" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
</SpkButton>
{Buttonspinner.map((idx,index) => (
<SpkButton variant={idx.color} className="" type="button" disabled key={index}>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    Loading...
</SpkButton>
))}
</div> // End Prism Code//`;

export const spinner8 =
    ` <div className="spinner-border text-primary m-5" role="status">
<span className="visually-hidden">Loading...</span>
</div> // End Prism Code//`;

export const spinner9 =
    ` <div className="text-center">
<div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div> // End Prism Code//`;

export const spinner10 =
    `<div className="spinner-border text-primary spinner-border-sm me-4" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-primary spinner-grow-sm me-4" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-primary me-4" style={{ width: '3rem', height: '3rem' }}
role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
<span className="visually-hidden">Loading...</span>
</div> // End Prism Code//`;

// end spinners

// Toasts

export const toast1 =
    ` 
    import { Toast } from "react-bootstrap";

     //basic example
     const [show, setShow] = useState(true);
     const toggleShow = () => setShow(!show);

     <Toast show={show} onClose={toggleShow} className="toast show"
     role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
     <Toast.Header className="text-default">
         <Image fill src="../../assets/images/brand-logos/favicon.ico" alt="" className="me-2" height="18" />
         <strong className="me-auto">Xintra</strong>
         <small>11 mins ago</small>
     </Toast.Header>
     <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
 </Toast> // End Prism Code//`;

export const reusabletoast1 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

 <SpkToast show={show} onClose={toggleShow} title="Xintra" message="Hello, world! This is a toast message." timestamp="11 min ago" imgSrc="../../assets/images/brand-logos/toggle-logo.png" ToastHeader={true} toastClass="custom-toast" headerClass="text-default" imgClass="custom-img-class" autohide={false} />`

export const toast2 =
    `  
    import { Button, Toast, ToastContainer } from "react-bootstrap";

    //live example
    const [show1, setShow1] = useState(false);

    <SpkButton type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow1(true)}>Show live
    toast</SpkButton>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
    <Toast id="liveToast" className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
        <Toast.Header className="text-default">
            <Image fill className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
            <strong className="me-auto">Xintra</strong> <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className=""> Hello, world! This is a toast message. </Toast.Body>
    </Toast>
</ToastContainer> // End Prism Code//`;

export const reusabletoast2 = ` 
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

<SpkButton Buttontype="button" Buttonvariant="primary" Id="liveToastBtn" onClickfunc={() => setShow1(true)}>Show live
toast</SpkButton>
<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<SpkToast show={show1} onClose={() => setShow1(false)} title="Xintra" message="Hello, world! This is a toast message." timestamp="11 min ago" imgSrc="../../assets/images/brand-logos/toggle-logo.png" ToastHeader={true} toastClass="custom-toast" headerClass="text-default" imgClass="custom-img-class" autohide={false} />
</ToastContainer>`

export const toast3 =
    `
    import { Button, Toast, ToastContainer } from "react-bootstrap";
    
    //Stacking
    const [show2, setShow2] = useState(true);
    const toggleShow2 = () => setShow2(!show2);

    const [show3, setShow3] = useState(true);
    const toggleShow3 = () => setShow3(!show3);

<ToastContainer className="toast-container position-static">
                            <Toast show={show2} onClose={toggleShow2} className="toast fade show">
                                <Toast.Header className="toast-header text-default">
                                    <Image fill src="../../assets/images/brand-logos/favicon.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Xintra</strong>
                                    <small>just now</small>
                                </Toast.Header>
                                <Toast.Body> See? Just like this.</Toast.Body>
                            </Toast>
                            <Toast show={show3} onClose={toggleShow3} className="toast fade show">
                                <Toast.Header className="toast-header text-default">
                                    <Image fill src="../../assets/images/brand-logos/favicon.ico" alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Xintra</strong>
                                    <small>2 seconds ago</small>
                                </Toast.Header>
                                <Toast.Body> Heads up, toasts will stack automatically</Toast.Body>
                            </Toast>
                        </ToastContainer> // End Prism Code//`;

export const reusabletoast3 = ` 
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

<ToastContainer className="toast-container position-static">

<SpkToast show={show2} onClose={toggleShow2} ToastHeader={true} toastClass="fade show" headerClass="text-default" imgSrc="../../assets/images/brand-logos/toggle-logo.png" imgClass="me-2" title="Xintra" timestamp="jsut now" message={"See? Just like this."} />
<SpkToast show={show3} onClose={toggleShow3} ToastHeader={true} toastClass="fade show" headerClass="text-default" imgSrc="../../assets/images/brand-logos/toggle-logo.png" imgClass="me-2" title="Xintra" timestamp="2 seconds ago" message={" Heads up, toasts will stack automatically"} />

</ToastContainer>`

export const toast4 =
    `
    import { Button, Toast, ToastContainer } from "react-bootstrap";
    
    //color schemes
    const [show4, setShow4] = useState(true);
    const toggleShow4 = () => setShow4(!show4);

    const [show5, setShow5] = useState(true);
    const toggleShow5 = () => setShow5(!show5);

    const [show6, setShow6] = useState(true);
    const toggleShow6 = () => setShow6(!show6);

    const [show7, setShow7] = useState(true);
    const toggleShow7 = () => setShow7(!show7);

    <Toast className="toast align-items-center text-bg-primary border-0 fade show mb-4" show={show4}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is Primary toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow4}></CloseButton>
    </div></Toast>

<Toast className="toast align-items-center text-bg-secondary border-0 fade show mb-4" show={show5}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is Secondary toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow5}></CloseButton>
    </div></Toast>

<Toast className="toast align-items-center text-bg-success border-0 fade show mb-4" show={show6}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is Success toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow6}></CloseButton>
    </div></Toast>

<Toast className="toast align-items-center text-bg-info border-0 fade show mb-4" show={show7}>
    <div className="d-flex">
        <Toast.Body className="" >Hello, world! This is info toast message. </Toast.Body>
        <CloseButton aria-label="Close" className="btn-close btn-close-white me-2 m-auto" onClick={toggleShow7}></CloseButton>
    </div></Toast> // End Prism Code//`;

export const reusabletoast4 = ` 
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

 <SpkToast toastClass="align-items-center text-bg-primary border-0 fade show mb-4" show={show4} message="Hello, world! This is Primary toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow4} ToastBtn={true} ToastHeader={false} />
<SpkToast toastClass="align-items-center text-bg-secondary border-0 fade show mb-4" show={show5} message="Hello, world! This is Secondary toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow5} ToastBtn={true} ToastHeader={false} />
<SpkToast toastClass="align-items-center text-bg-warning border-0 fade show mb-4" show={show6} message="Hello, world! This is Warning toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow6} ToastBtn={true} ToastHeader={false} />
<SpkToast toastClass="align-items-center text-bg-info border-0 fade show mb-4" show={show7} message="Hello, world! This is Info toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow7} ToastBtn={true} ToastHeader={false} />`


export const toast10 =
    `<ToastContainer  className="toast-container position-fixed top-0 start-0 p-3">
<Toast id="topleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
 onClose={() => setShow13(false)} show={show13} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
        <SpkButton type="button" className="btn-close" data-bs-dismiss="toast"
            aria-label="Close"></SpkButton>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
<Toast id="topcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" onClose={() => setShow14(false)} show={show14} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="topright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
 onClose={() => setShow15(false)} show={show15} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
<Toast id="middleleft-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
   onClose={() => setShow16(false)} show={show16} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-50 start-50 translate-middle">
<Toast id="middlecenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
  onClose={() => setShow17(false)} show={show17} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
<Toast id="middleright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
  onClose={() => setShow18(false)} show={show18} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed bottom-0 start-0 p-3">
<Toast id="bottomleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
onClose={() => setShow19(false)} show={show19} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
<Toast id="bottomcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
 onClose={() => setShow20(false)} show={show20} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer  className="toast-container position-fixed bottom-0 end-0 p-3">
<Toast id="bottomright-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
 onClose={() => setShow21(false)} show={show21} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer> // End Prism Code//`;

export const reusabletoast10 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

<SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow23(true)} Customclass="me-2" Id="topleftToastBtn">Top Left</SpkButton>
<ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow23(false)} show={show23} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc="../../assets/images/brand-logos/toggle-white.png" title="Xintra" message="Your,toast message here." />
                        </ToastContainer>`

export const toast6 =
    `<Toast id="primaryToast" bg="primary-transparent" className="toast colored-toast" 
onClose={() => setShow1(false)} show={show1} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="secondaryToast" className="toast colored-toast bg-secondary-transparent" 
role="alert" aria-live="assertive"
    aria-atomic="true"  onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
    <Toast.Header className="toast-header bg-secondary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="warningToast" className="toast colored-toast bg-warning-transparent" 
role="alert" aria-live="assertive"
onClose={() => setShow3(false)} show={show3} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-warning text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="infoToast" className="toast colored-toast bg-info-transparent" 
role="alert" aria-live="assertive"
 onClose={() => setShow4(false)} show={show4} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="bg-info text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="successToast" className="toast colored-toast bg-success-transparent" 
role="alert" aria-live="assertive"
onClose={() => setShow5(false)} show={show5} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="bg-success text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="dangerToast" className="toast colored-toast bg-danger-transparent" 
role="alert" aria-live="assertive"
 onClose={() => setShow6(false)} show={show6} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-danger text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body className="toast-body">
        Your,toast message here.
    </Toast.Body>
</Toast> // End Prism Code//`;

export const reusabletoast6 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

 <SpkButton Buttontype="button" Buttonvariant='primary-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => setShow13(true)}>Primary</SpkButton>
 <SpkToast ToastHeader={true} bg="primary-transparent" toastClass="colored-toast" onClose={() => setShow13(false)} show={show13} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary" imgClass="bd-placeholder-img rounded me-2" imgSrc="../../assets/images/brand-logos/toggle-white.png" message="Your,toast message here." title="Xintra" />`

export const toast5 =
    `<ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
<Toast id="solid-primaryToast" className="toast colored-toast bg-primary text-fixed-white"
  onClose={() => setShow7(false)} show={show7} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-secondaryToast" className="toast colored-toast bg-secondary text-fixed-white"  
onClose={() => setShow8(false)} show={show8} delay={3000} autohide
    aria-atomic="true">
    <Toast.Header className="toast-header bg-secondary text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-warningToast" className="toast colored-toast bg-warning text-fixed-white"  
onClose={() => setShow9(false)} show={show9} delay={3000} autohide>
    <Toast.Header className="toast-header bg-warning text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-infoToast" className="toast colored-toast bg-info text-fixed-white" 
onClose={() => setShow10(false)} show={show10} delay={3000} autohide>
    <Toast.Header className="toast-header bg-info text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-successToast" className="toast colored-toast bg-success text-fixed-white" 
onClose={() => setShow11(false)} show={show11} delay={3000} autohide>
    <Toast.Header className="toast-header bg-success text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-dangerToast" className="toast colored-toast bg-danger text-fixed-white"
 onClose={() => setShow12(false)} show={show12} delay={3000} autohide>
    <Toast.Header className="toast-header bg-danger text-fixed-white">
        <Image fill className="bd-placeholder-img rounded me-2" 
    src="../../../assets/images/brand-logos/toggle-dark.png" alt="..."/>
        <strong className="me-auto">Velvet</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer> // End Prism Code//`;

export const reusabletoast5 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => setShow71(true)}>Primary</SpkButton>
<SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary" bodyClass="text-fixed-white" onClose={() => setShow71(false)} show={show71} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary" imgClass="bd-placeholder-img rounded me-2" imgSrc="../../assets/images/brand-logos/toggle-white.png" message="Your,toast message here." title="Xintra" />
`

export const toast7 =
    `<Toast show={showA} onClose={toggleShowA} className="toast show"
role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
 <Toast.Header>
            <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="me-2" height="18" />
 <strong className="me-auto">Velvet</strong>
 <small>11 mins ago</small>
 </Toast.Header>
 <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
</Toast> // End Prism Code//`;

export const reusabletoast7 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

 <SpkToast ToastHeader={true} show={show19} onClose={toggleShow19} toastClass="show" headerClass="text-default" imgClass="me-2" imgSrc="../../assets/images/brand-logos/toggle-logo.png" title="Xintra" timestamp="11 mins ago" message="Hello, world! This is a toast message." />`

export const toast8 =
    `<Toast role="alert" 
className="toast align-items-center fade show mb-3" show={showI}>
<div className="d-flex">
<Toast.Body className="text-dark">Hello, world! This is a toast message.
</Toast.Body>
   <CloseButton type="button" className="btn-close me-2 m-auto" 
    onClick={toggleShowI}>
   </CloseButton>
</div>
</Toast>
<div>
<span className="my-4 text-muted">
   Alternatively, you can also add additional controls and components to
   toasts.
</span>
</div>
<Toast className="toast fade show mt-2" show={showJ}>
<Toast.Body>
   Hello, world! This is a toast message.
<div className="mt-2 pt-2 border-top">
<SpkButton type="button"  className="btn btn-primary btn-sm btn-wave">Take
 action</SpkButton>
 <SpkButton type="button" className="btn btn-secondary btn-sm btn-wave" 
 onClick={toggleShowJ}>Close</SpkButton>
 </div>
</Toast.Body>
</Toast> // End Prism Code//`;

export const reusabletoast8 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

<SpkToast ToastHeader={false} toastClass="lign-items-center fade show mb-3" show={show20} ToastBtn={true} message="Hello, world! This is Primary toast message. " btnClass="btn-close me-2 m-auto" onclick={toggleShow20} />`

export const toast9 =
    `<div className="bd-example bg-light bd-example-toasts d-flex p-0 px-3">
<div aria-live="polite" aria-atomic="true"
    className="d-flex justify-content-center align-items-center w-100">
    <Toast show={showK} onClose={toggleShowK} className="toast fade show shadow-lg">
        <Toast.Header className="text-default">
            <Image fill src="../../../assets/images/brand-logos/fav.ico" alt="" className="bd-placeholder-img rounded me-2" />
            <strong className="me-auto">Velvet</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
    </Toast>
</div>
</div> // End Prism Code//`;

export const reusabletoast9 = `
import SpkToast from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-toast";

<SpkToast ToastHeader={true} show={show22} onClose={toggleShow22} toastClass="fade show shadow-lg" headerClass="text-default" imgClass="bd-placeholder-img rounded me-2" imgSrc="../../assets/images/brand-logos/toggle-logo.png" title="Xintra" timestamp="11 mins ago" message="Hello, world! This is a toast message." />`
// end toasts

// tooltips
export const datatooltip1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
interface direction {
	id: number
	text: string
}
export const Tooltipdirtooltip: direction[] = [
	{ id: 1, text: "top" },
	{ id: 2, text: "right" },
	{ id: 3, text: "bottom" },
	{ id: 4, text: "left" }
]; // End Prism Code//`
export const tooltip1 =
    `  {Tooltipdirtooltip.map((idx,index)=>(
    <SpkTooltips placement={idx.text} title="Tooltip on {idx.text} " key={index}>
    <SpkButton  Buttontype="button" Customclass="btn btn-primary btn-wave">
    Tooltip on {idx.text}
    </SpkButton>
    </SpkTooltips>
    ))} // End Prism Code//`;

export const reusabletooltip1 = `
import SpkTooltips from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips";

<div className="btn-list">
{Tooltipdirtooltip.map((idx, index) => (
    <SpkTooltips placement={idx.text} title={'Tooltip on &#60{idx.text}'} key={index} >
        <SpkButton Buttontype="button" Buttonvariant="primary">
            Tooltip on {idx.text}
        </SpkButton>
    </SpkTooltips>
))}
</div>`

export const tooltip2 =
    `  <p className="text-muted mb-0">
Hover on the link to view the
<SpkTooltips placement="top" overlay={<Tooltip className='tooltip-primary'>
Link Tooltip ">
<Link href="#!" scroll={false} className="text-primary">Tooltip</Link>
     </SpkTooltips> 
</p> // End Prism Code//`;

export const reusabletooltip2 = `
import SpkTooltips from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips";

 <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Link Tooltip ">
<Link href="#!" scroll={false} className="text-primary ms-1 d-inline-flex">Tooltip</Link>
</SpkTooltips>`

export const datatooltip3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
interface svg {
	id: number
	class: string
	color: string
	text: string
}
export const SVGtooltip: svg[] = [
	{ id: 1, class: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z", color: "primary", text: "Home" },
	{ id: 2, class: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z", color: "secondary", text: "Message" },
	{ id: 3, class: "M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56  C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37, 0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z", color: "warning", text: "Add User" },
	{ id: 4, class: "M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z", color: "info", text: "Send File" },
	{ id: 5, class: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", color: "success", text: "Action" },
]; // End Prism Code//`
export const tooltip3 =
    `{SVGtooltip.map((idx,index) => (
        <SpkTooltips key={index} placement="top" overlay={<Tooltip className={'tooltip-&#{idx.color}'}>{idx.text} ">
            <Link href="#!" scroll={false} className="me-3 svg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className={'svg-&#{idx.color}'} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path
                        d={idx.class} /></svg>
            </Link>
        </SpkTooltips>
    ))} // End Prism Code//`;

export const reusabletooltip3 = `
import SpkTooltips from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips";

 {SVGtooltip.map((idx,index) => (
    <SpkTooltips key={index} placement="top" tooltipClass={'tooltip-&#60{idx.color}'} title={idx.text}>
        <Link href="#!" scroll={false} className={'me-3 svg-&#60{idx.color}'}>
            <svg xmlns="http://www.w3.org/2000/svg" className={'svg-&#60{idx.color}'} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none" /><path
                    d={idx.class} /></svg>
        </Link>
    </SpkTooltips>
))}`

export const tooltip4 =
    `  {Tooltipdirtooltip.map((idx,index)=>(
    <SpkTooltips placement={idx.text} title="Tooltip on {idx.text} " key={index}>
    <SpkButton Buttontype="button"  Buttonvariant="primary">
    Tooltip on {idx.text}
    </SpkButton>
    </SpkTooltips>
    ))} // End Prism Code//`;

export const reusabletooltip4 = ` 
import SpkTooltips from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips";

 <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="primary Tooltip " trigger={['hover', 'focus']} >
<SpkButton Buttontype="button" Buttonvariant='primary'>
    Primary Tooltip
</SpkButton>
</SpkTooltips>`

export const tooltip5 =
    `  <SpkTooltips overlay={<Tooltip id="tooltip-disabled">Disabled tooltip!">
<span className="d-inline-block">
 <SpkButton Disabled={true} Style={{ pointerEvents: 'none' }}>
            Disabled button
      </SpkButton>
   </span>
</SpkTooltips> // End Prism Code//`;

export const reusabletooltip5 = ` 
import SpkTooltips from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips";

 <SpkTooltips id="tooltip-disabled" title="Disabled tooltip" trigger={['hover', 'focus']} >
<span className="d-inline-block">
    <SpkButton Disabled={true} Style={{ pointerEvents: "none" }}>
        Disabled button
    </SpkButton>
</span>
</SpkTooltips>`

export const tooltip6 =
    `<SpkTooltips placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey">
<Link href="#!" scroll={false}
    className="avatar avatar-md me-2 online avatar-rounded">
    <Image width={40} height={40} src="../../../assets/images/faces/12.jpg" alt="img" />
</Link>
</SpkTooltips>

<SpkTooltips placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai">
<Link href="#!" scroll={false}
    className="avatar avatar-lg me-2 online avatar-rounded">
    <Image width={48} height={48} src="../../../assets/images/faces/3.jpg" alt="img" />
</Link>
</SpkTooltips>
<SpkTooltips placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook">
<Link href="#!" scroll={false}
    className="avatar avatar-xl me-2 online avatar-rounded">
    <Image width={64} height={64} src="../../../assets/images/faces/15.jpg" alt="img" />
</Link>
</SpkTooltips> // End Prism Code//`;

export const reusabletooltip6 = ` 
import SpkTooltips from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-tooltips";

 <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Alex Carey">
<Link href="#!" scroll={false}
    className="avatar avatar-md me-2 online avatar-rounded">
    <Image width={40} height={40} src="../../assets/images/faces/12.jpg" alt="img" />
</Link>
</SpkTooltips>`

// end toltips

// typography
export const typography1 =
    `
    <p className="fs-1 mb-2">.fs-1 text</p>
    <p className="fs-2 mb-2">.fs-2 text</p>
    <p className="fs-3 mb-2">.fs-3 text</p>
    <p className="fs-4 mb-2">.fs-4 text</p>
    <p className="fs-5 mb-2">.fs-5 text</p>
    <p className="fs-6 mb-0">.fs-6 text</p>
 // End Prism Code//`;

export const typography5 =
    `<h1 className="mb-3">h1. Bootstrap heading</h1>
    <h2 className="mb-3">h2. Bootstrap heading</h2>
    <h3 className="mb-3">h3. Bootstrap heading</h3>
    <h4 className="mb-3">h4. Bootstrap heading</h4>
    <h5 className="mb-3">h5. Bootstrap heading</h5>
    <h6 className="mb-0">h6. Bootstrap heading</h6> // End Prism Code//`;

export const typography3 =
    `<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1> // End Prism Code//`;

export const typography4 =
    `<h3>
Fancy display heading
<small className="text-muted">With faded secondary text</small>
 </h3> // End Prism Code//`;

export const typography2 =
    `<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del>
</p>
<p><s>This line of text is meant to be treated as no longer
        accurate.</s>
</p>
<p><ins>This line of text is meant to be treated as an addition to the
        document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine
        print.</small>
</p>
<p><strong>This line rendered as bold text.</strong></p>
<p className="mb-0"><em>This line rendered as italicized text.</em></p> // End Prism Code//`;

export const typography6 =
    `<p className="fs-1 mb-2">.fs-1 text</p>
<p className="fs-2 mb-2">.fs-2 text</p>
<p className="fs-3 mb-2">.fs-3 text</p>
<p className="fs-4 mb-2">.fs-4 text</p>
<p className="fs-5 mb-2">.fs-5 text</p>
<p className="fs-6 mb-0">.fs-6 text</p> // End Prism Code//`;

export const typography7 =
    `<p className="lead mb-0">
<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
</p> // End Prism Code//`;

export const typography8 =
    `<dl className="row mb-0">
<dt className="col-sm-3">Description lists</dt>
<dd className="col-sm-9">A description list is perfect for defining terms.</dd>

<dt className="col-sm-3">Term</dt>
<dd className="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
</dd>

<dt className="col-sm-3">Another term</dt>
<dd className="col-sm-9">This definition is short, so no extra paragraphs or
    anything.</dd>

<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd className="col-sm-9">This can be useful when space is tight. Adds an
    ellipsis at
    the end.</dd>

<dt className="col-sm-3">Nesting</dt>
<dd className="col-sm-9 mb-0">
    <dl className="row mb-0">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
            definition list inside your definition list.</dd>
    </dl>
</dd></dl> // End Prism Code//`;

export const typography9 =
    `<ul className="list-unstyled">
<li>This is a list.</li>
<li>It appears completely unstyled.</li>
<li>Structurally, it's still a list.</li>
<li>However, this style only applies to immediate child elements.</li>
<li className="mb-2">Nested lists:
    <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
    </ul>
</li>
<li>This may still come in handy in some situations.</li>
</ul> // End Prism Code//`;

export const typography10 =
    `<figure className="blockquote-container">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption> </figure> // End Prism Code//`;

export const typography11 =
    `<figure className="blockquote-container text-end">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption></figure> // End Prism Code//`;

export const typography12 =
    `<blockquote className="blockquote custom-blockquote primary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span></blockquote> // End Prism Code//`;

export const typography13 =
    `<blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote> // End Prism Code//`;

export const typography14 =
    `<blockquote className="blockquote custom-blockquote warning mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span> // End Prism Code//`;

export const typography15 =
    `<blockquote className="blockquote custom-blockquote success mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote> // End Prism Code//`;

export const typography16 =
    `<blockquote className="blockquote custom-blockquote info mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote> // End Prism Code//`;

export const typography17 =
    `<blockquote className="blockquote custom-blockquote danger mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote> // End Prism Code//`;

export const typography18 =
    `<p><abbr title="attribute">attr</abbr></p>
<p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p> // End Prism Code//`;

export const typography19 =
    `<ul className="list-inline mb-0">
<li className="list-inline-item">This is a list item.</li>
<li className="list-inline-item">And another one.</li>
<li className="list-inline-item">But they're displayed inline.</li>
</ul> // End Prism Code//`;

export const typography20 =
    `<p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, 
architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
<div className="text-success">
    <hr/>
</div>
<p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, 
magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>
<hr className="text-danger border-2 opacity-50"/>
<p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur
 aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
<hr className="border-primary border-3 opacity-75"/> // End Prism Code//`;

export const typography21 =
    `<p className="font-monospace mb-0">This is in monospace</p> // End Prism Code//`;

export const typography22 =
    `<p className="text-muted mb-0">
Muted text with a <a href="#!" scroll={false} className="text-reset text-decoration-underline text-dark">reset link</a>.
</p> // End Prism Code//`;

export const typography23 =
    `<p className="visible mb-0">This is visible text</p> // End Prism Code//`;

export const typography24 =
    `<p className="invisible mb-0">This is invisible text</p> // End Prism Code//`;

export const typography25 =
    `<p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize mb-0">CapiTaliZed text.</p> // End Prism Code//`;

export const typography26 =
    `<p className="text-decoration-underline">This text has a line underneath it.
</p>
<p className="text-decoration-line-through">This text has a line going
    through
    it.
</p>
<Link to="#" className="text-decoration-none">This link has its text
    decoration
    removed
</Link> // End Prism Code//`;

export const typography27 =
    `<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-semibold">Semibold weight text.</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal mb-0">Text with normal font style</p> // End Prism Code//`;

export const typography28 =
    `<p className="lh-1">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p className="lh-sm">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p className="lh-base">This is a long paragraph written to show how the line-height
of
an element is affected by our utilities. Classes are applied to the element
itself or sometimes the parent element. These classes can be customized as
needed with our utility API.
</p>
<p className="lh-lg mb-0">This is a long paragraph written to show how the
line-height
of an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p> // End Prism Code//`;

export const typography29 =
    `<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-end">End aligned text on all viewport sizes.</p>

<p className="text-sm-start">Start aligned text on viewports sized SM (small) or
    wider.
</p>
<p className="text-md-start">Start aligned text on viewports sized MD (medium) or
    wider.
</p>
<p className="text-lg-start">Start aligned text on viewports sized LG (large) or
    wider.
</p>
<p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
    or
    wider.</p> // End Prism Code//`;

export const typography30 =
    `<div className="badge bg-primary text-wrap mb-3" style={{width: "6rem"}}>
This text should wrap.
</div>
<p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
<div className="text-nowrap bg-light border" style={{width: "8rem"}}>
This text should overflow the parent.
</div> // End Prism Code//`;

export const typography31 =
    `<p className="text-break mb-0">
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
 </p> // End Prism Code//`;

export const link1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p><Link className="link-opacity-10-hover" href="#!" scroll={false}>Link opacity 10</Link></p>
<p><Link className="link-opacity-25-hover" href="#!" scroll={false}>Link opacity 25</Link></p>
<p><Link className="link-opacity-50-hover" href="#!" scroll={false}>Link opacity 50</Link></p>
<p><Link className="link-opacity-75-hover" href="#!" scroll={false}>Link opacity 75</Link></p>
<p className="mb-0"><Link className="link-opacity-100" href="#!" scroll={false}>Link opacity 100</Link></p>
</div> // End Prism Code//`;

export const link2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body">
<p><Link href="#!" scroll={false} className="text-decoration-underline">Default link</Link></p>
<p><Link className="link-offset-1 text-decoration-underline" href="#!" scroll={false}>Offset 1 link</Link></p>
<p><Link className="link-offset-2 text-decoration-underline" href="#!" scroll={false}>Offset 2 link</Link></p>
<p className="mb-0"><Link className="link-offset-3 text-decoration-underline" href="#!" scroll={false}>Offset 3 link</Link></p>
</div> // End Prism Code//`;

export const link3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body">
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="#!" scroll={false}>Underline opacity 0</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="#!" scroll={false}>Underline opacity 10</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="#!" scroll={false}>Underline opacity 25</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="#!" scroll={false}>Underline opacity 50</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="#!" scroll={false}>Underline opacity 75</Link></p>
<p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="#!" scroll={false}>Underline opacity 100</Link></p>
</div> // End Prism Code//`;

export const link4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p><Link href="#!" scroll={false} className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link</Link></p>
<p><Link href="#!" scroll={false} className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link</Link></p>
<p><Link href="#!" scroll={false} className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link</Link></p>
<p><Link href="#!" scroll={false} className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link</Link></p>
<p><Link href="#!" scroll={false} className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link</Link></p>
<p><Link href="#!" scroll={false} className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link</Link></p>
<p><Link href="#!" scroll={false} className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link</Link></p>
<p><Link href="#!" scroll={false} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link</Link></p>
<p className="mb-0"><Link href="#!" scroll={false} className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline ">Emphasis link</Link></p>
</div> // End Prism Code//`;

export const link5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->// <div className="card-body">
<p><Link className="pe-none text-primary fw-medium text-decoration-underline" tabIndex={-1} aria-disabled="true" href={""}>This link</Link> can not be clicked.</p>
<p><Link href="#!" scroll={false} className="pe-auto text-primary fw-medium text-decoration-underline">This link</Link> can be clicked (this is default behavior).</p>
<p className="pe-none mb-0"><Link tabIndex={-1} className="text-primary fw-medium text-decoration-underline" aria-disabled="true" href={""}>This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link href="#!" scroll={false} className="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
</div> // End Prism Code//`;

export const link6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p className="user-select-auto">This paragraph has default select behavior.</p>
<p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
</div> // End Prism Code//`;

export const link7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" href="#!" scroll={false}>
    Underline opacity 0
</Link>
</div> // End Prism Code//`;

export const link8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//  <p><Link className="link-opacity-10" href="#!" scroll={false}>Link opacity 10</Link></p>
<p><Link className="link-opacity-25" href="#!" scroll={false}>Link opacity 25</Link></p>
<p><Link className="link-opacity-50" href="#!" scroll={false}>Link opacity 50</Link></p>
<p><Link className="link-opacity-75" href="#!" scroll={false}>Link opacity 75</Link></p>
<p className="mb-0"><Link className="link-opacity-100" href="#!" scroll={false}>Link opacity 100</Link></p> // End Prism Code//`;

export const link9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//<div className="card-body">
<p><Link href="#!" scroll={false} className="link-underline-primary text-decoration-underline">Primary underline</Link></p>
<p><Link href="#!" scroll={false} className="link-underline-secondary text-decoration-underline">Secondary underline</Link></p>
<p><Link href="#!" scroll={false} className="link-underline-success text-decoration-underline">Success underline</Link></p>
<p><Link href="#!" scroll={false} className="link-underline-danger text-decoration-underline">Danger underline</Link></p>
<p><Link href="#!" scroll={false} className="link-underline-warning text-decoration-underline">Warning underline</Link></p>
<p><Link href="#!" scroll={false} className="link-underline-info text-decoration-underline">Info underline</Link></p>
<p><Link href="#!" scroll={false} className="link-underline-light text-decoration-underline">Light underline</Link></p>
<p className="mb-0"><Link href="#!" scroll={false} className="link-underline-dark text-decoration-underline">Dark underline</Link></p>
</div> // End Prism Code//`;


