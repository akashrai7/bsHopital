"use client"

import SpkCard from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/reusable-cards/spk-basiccard";
import Spkbgcards from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/reusable-cards/spkbgcards";
import SpkCollapsecard from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/reusable-cards/spkcollapsecard";
import Spkimageoverlaycard from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/reusable-cards/spkimageoverlaycard";
import Spktitlecards from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/reusable-cards/spktitlecards";
import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import Dragula from "react-dragula";

const Draggabledata = () => {

	const leftContainerRef = useRef<HTMLDivElement | null>(null);
	const rightContainerRef = useRef<HTMLDivElement | null>(null);
	const windowElement: any = typeof window !== "undefined" ? window : null;

	useEffect(() => {
		if (leftContainerRef.current && rightContainerRef.current && windowElement) {
			Dragula([leftContainerRef.current, rightContainerRef.current]);
		}
	}, []);

	// Card With Collapse Button
	const [BasicExpanded, setBasicExpanded] = useState(true);

	const BasicHandleExpandClick = () => {
		setBasicExpanded(!BasicExpanded);
	};
	//Card With Close Button
	const CloseButton = () => (
		document.querySelector(".close-button-content")?.classList.add("d-none")
	)

	//fullscreen
	const [fullScreen, setFullscreen] = useState("true");
	const [fullscreenshow, setfullscreenShow] = useState(false);

	const fullscreenmodalClose = () => setfullscreenShow(false)

	function handleShow(breakpoint: any) {
		setFullscreen(breakpoint);
		setfullscreenShow(true);
	}

	return (
		<Fragment>

			<div className="row">
				<Col xl={6} ref={leftContainerRef} id="draggable-left">

					<SpkCard cardClass="card-bg-primary" bodyText={(
						<>
							<blockquote className="blockquote mb-0 text-center">
								<h6 className="text-fixed-white">The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6> <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer> </blockquote>
						</>
					)}
					/>

					<Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
						<Modal.Header>
							<Modal.Title as="h6">Fullscreen Button</Modal.Title>
							<span className="d-flex ms-auto me-2" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
						</Modal.Header>
						<Modal.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Modal.Body>
						<Modal.Footer>
							<SpkButton Buttonvariant="secondary" onClickfunc={fullscreenmodalClose}>
								Close
							</SpkButton>
							<SpkButton Buttonvariant="primary">
								Save Changes
							</SpkButton>
						</Modal.Footer>
					</Modal>
					<Spktitlecards AnchortagNavigate="#!" Navigate="#!" ButtonTag={true} Cardfooter={true} Cardheader={true} Title="Card With Fullscreen Button" Customclass="custom-card" Icontag={true} Linktag={true} Icon="ri-fullscreen-line"
						CustomHeaderclass="justify-content-between" OnclickFunc={() => handleShow(true)}>
						<h6 className="card-text fw-medium">FullScreen Card</h6>
						<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
					</Spktitlecards>
					<SpkCollapsecard collapseToggle={true} expandButton={true} Navigate="#!" OnClickFunc={BasicHandleExpandClick} Expand={BasicExpanded} Timeout={3000} footertext="Read More" Title="Card With Collapse Button">
						<h6 className="card-text fw-medium">Collapsible Card</h6>
						<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
					</SpkCollapsecard>
					<Spktitlecards AnchortagNavigate="#!" Navigate="#!" ButtonTag={true} Cardfooter={true} Customclass="custom-card close-button-content" Cardheader={true} Title="Card With Close Button" Linktag={true} Icontag={true} Icon="ri-close-line fs-18" CustomHeaderclass="justify-content-between" OnclickFunc={CloseButton}>
						<h6 className="card-text fw-medium">Closed Card</h6>
						<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
					</Spktitlecards>
					<Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="custom-card border border-info" Anchortagbefore={true}  >
						<div className="d-flex align-items-center">
							<div className="me-3">
								<span className="avatar avatar-xl">
									<Image width={64} height={64} src="../../../assets/images/faces/8.jpg" alt="img" />
								</span>
							</div>
							<div>
								<p className="card-text text-info mb-1 fs-14 fw-medium">Jessica Sams.</p>
								<div className="card-title fs-12 mb-1">Department Of Commerce</div>
								<div className="card-title text-muted fs-11 mb-0">23 Years, Female</div>
							</div>
						</div>
					</Spktitlecards>
					<Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="custom-card" Anchortagbefore={true}  >
						<div className="d-flex align-items-center">
							<div className="me-3">
								<span className="avatar avatar-md">
									<Image width={40} height={40} src="../../../assets/images/faces/15.jpg" alt="img" />
								</span>
							</div>
							<div>
								<p className="card-text mb-0 fs-14 fw-medium">Atharva Simon.</p>
								<div className="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
							</div>
						</div>
					</Spktitlecards>

				</Col>
				<Col xl={6} ref={rightContainerRef} id="draggable-right">
					<Spkimageoverlaycard CustomClass="overlay-card" CardHeader={false} Imgsrc="../../../assets/images/media/media-36.jpg" Overlayclass="over-content-bottom top-0"
						CardFooter={true} Footertext="Last updated 3 mins ago" Customimgclass="card-img" Custombodyclass="text-fixed-white" Customfooterclass="text-fixed-white" >
						<div className="card-text text-fixed-white">
							Image Overlays Are Awesome!
						</div>
						<div className="card-text mb-2 custom-cards-overlayText">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
					</Spkimageoverlaycard>
					<Spkbgcards Navigate="#!" color="success" Imgsrc="../../../assets/images/faces/5.jpg" Title="Sonia Agarwal" Value="In leave for 1 month" Textclass="fixed-white" Class=' drag-card' />
					<Spkimageoverlaycard CustomClass="overlay-card" Title="Image Overlays Are Awesome!" Imgsrc="../../../assets/images/media/media-35.jpg" CardHeader={true}
						CardFooter={false} Customimgclass="card-img" Custombodyclass="text-fixed-white" CustomTitleclass="text-fixed-white">
						<div className="card-text mb-2 custom-cards-overlayText">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
						<div className="card-text">Last updated 3 mins ago</div>
					</Spkimageoverlaycard>
				</Col>

			</div>

			{/* <!--End::row-1 --> */}

		</Fragment>
	)
};

export default Draggabledata;