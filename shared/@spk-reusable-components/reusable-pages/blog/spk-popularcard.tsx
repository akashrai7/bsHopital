"use client"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { Card } from "react-bootstrap"

interface Types {
    imgSrc:string;
    title:string;
}

interface SpkPopularCardProps {
    blog:Types;
}

const SpkPopularCard:React.FC<SpkPopularCardProps> = ({blog}) => {

    return (
        <Fragment>
            <div className="col-6 col-xl">
                <Link scroll={false} href="#!">
                    <Card className="custom-card overlay-card blog-card text-fixed-white">
                        <Image fill src={blog.imgSrc} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                            <div className="card-footer border-top-0 text-center">
                                <h6 className="fw-semibold mb-0 text-fixed-white">{blog.title}</h6>
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>
        </Fragment>
    )
}
export default SpkPopularCard;