"use client"

import SpkButton from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

interface WalletIntegrationProps { }

const WalletIntegration: React.FC<WalletIntegrationProps> = () => {

    const WalletList = [
        { name: "Etherium", image: "../../../assets/images/nft-images/34.png" },
        { name: "Binance", image: "../../../assets/images/nft-images/33.png" },
        { name: "Solana", image: "../../../assets/images/nft-images/32.png" },
        { name: "Tezos", image: "../../../assets/images/nft-images/28.png" },
        { name: "Avalanche", image: "../../../assets/images/nft-images/30.png" },
        { name: "Cardano", image: "../../../assets/images/nft-images/29.png" },
    ];
    interface Wallet {
        name: string;
        image: string;
        active?: boolean;
        avatarClass: string;
    };

    const WalletCards: Wallet[] = [
        { name: "MetaMask", image: "../../../assets/images/nft-images/22.png", active: true, avatarClass: 'p-2' },
        { name: "Enjin Wallet", image: "../../../assets/images/nft-images/23.png", avatarClass: 'p-2' },
        { name: "Trust Wallet", image: "../../../assets/images/nft-images/20.png", avatarClass: '' },
        { name: "Coinbase Wallet", image: "../../../assets/images/nft-images/24.png", avatarClass: 'p-2' },
        { name: "Lido", image: "../../../assets/images/nft-images/19.png", avatarClass: 'p-2' },
        { name: "Huobi Wallet", image: "../../../assets/images/nft-images/27.png", avatarClass: '' },
    ];

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Seo title="Jobs-Wallet Integration" />

            <Pageheader title="Dashboards" subtitle="NFT" currentpage="Wallet Integration" activepage="Wallet Integration" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <div className="card-title">
                                Choose Network
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ListGroup as="ul" className="list-group-flush nft-list">
                                {WalletList.map((crypto, index) => (
                                    <ListGroup.Item as="li" className="" key={index}>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <Image width={28} height={28} src={crypto.image} alt={crypto.name} />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">{crypto.name}</div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Choose Wallet
                            </div>
                            <div>
                                <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave">Add New Wallet</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row className="justify-content-center">
                                {WalletCards.map((wallet, index) => (
                                    <Col xxl={3} key={index}>
                                        <Card className={`custom-card nft-wallet ${wallet.active ? "active" : ""}`}>
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-rounded bg-light ${wallet.avatarClass}`}>
                                                            <Image width={42} height={42} src={wallet.image} alt={wallet.name} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">{wallet.name}</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <div>
                                <SpkButton Buttonvariant="success" Customclass="btn float-end btn-wave">Connect</SpkButton>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};

export default WalletIntegration;