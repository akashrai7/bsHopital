"use client"

import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const Draggabledata = dynamic(() => import("@/shared/data/general/adavanec-ui/draggabledata"), { ssr: false });

interface DraggableCardsProps { }

const DraggableCards: React.FC<DraggableCardsProps> = () => {
    return (
        <Fragment>

            <Seo title={"Draggable Cards"} />

            <Pageheader title="Advanced Ui" currentpage="Draggable Cards" activepage="Draggable Cards" />

            <Draggabledata />

        </Fragment>
    )
};

export default DraggableCards;