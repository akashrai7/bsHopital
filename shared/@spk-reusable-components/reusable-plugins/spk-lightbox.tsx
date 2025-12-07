import { Fragment } from 'react';
import Lightbox, { PluginProps } from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface LightboxGalleryProps {
  open: boolean;
  index?: number;
  scroll?: boolean | any;
  on?: boolean;
  style?: React.CSSProperties;
  mainClass?: string;
  portals?: boolean;
  Controller?: React.ReactNode;
  plugins?: any;
  label?: Record<string, string>;
  toolbar?: boolean;
  Carousel?: boolean;
  animation?: string;
  slides?: any;
  close?: () => void;
  zoom?: { maxZoomPixelRatio: number; scrollToZoom: boolean }
}

export const Lightboxcomponent: React.FC<LightboxGalleryProps> = ({ open, index, scroll = true, on = true, style = {}, mainClass = '', portals = false, Controller, plugins = [Fullscreen, Slideshow, Thumbnails, Zoom] as unknown as PluginProps, label = { zoomIn: 'Zoom In', zoomOut: 'Zoom Out' }, toolbar = true, Carousel = true, animation = 'fade', slides, close, zoom = { maxZoomPixelRatio: 10, scrollToZoom: true }
}: any) => {
  return (
    <Fragment>
      <Lightbox open={open} index={index} on={on} styles={style} controller={Controller} portal={portals} className={mainClass} plugins={plugins} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} labels={label} toolbar={toolbar} carousel={Carousel} animation={animation} slides={slides} close={close}/>
    </Fragment>
  );
};
