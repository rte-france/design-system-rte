import { LoaderProps as CoreLoaderProps } from "@design-system-rte/core/components/loader/loader.interface"
import { forwardRef } from "react";
import { loaderSize } from "@design-system-rte/core/components/loader/loader.constants";

import style from "./Loader.module.scss";
import { concatClassNames } from "../utils";

interface LoaderProps extends CoreLoaderProps, React.HTMLAttributes<HTMLDivElement> { }

const Loader = forwardRef<HTMLDivElement, LoaderProps>(
    (
        {
            appearance = "brand",
            size = "medium",
            showLabel = true,
            label,
            labelPosition = "right",
            className,
            ...props
        },
        ref
    ) => {

        return (
            <div className={concatClassNames(style.loader, className)} data-appearance={appearance} data-labelPosition={labelPosition} ref={ref} {...props}>
                {appearance == 'brand' ?
                    <svg xmlns="http://www.w3.org/2000/svg" width={loaderSize[size]} height={loaderSize[size]} className={(style.svgLoader)} viewBox="0 0 48 48" fill="none">
                        <g clipPath="url(#paint0_angular_3277_5812_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.0240793 7.6297e-08 -7.62968e-08 0.0240017 24.0001 24.0003)"><foreignObject x="-999.939" y="-999.939" width="1999.88" height="1999.88"><div style={{ background: "conic-gradient(from 90deg,rgba(41, 100, 160, 0) 0deg,rgba(41, 100, 160, 1) 360deg)", height: "100%", width: "100%", opacity: 1 }}></div></foreignObject></g></g><path d="M23.9268 0.00012207C30.2959 -0.0298029 36.4169 2.46514 40.9453 6.93665C44.9864 10.9272 47.4647 16.2009 47.9795 21.8087C48.0827 22.9325 47.1646 23.8553 46.0361 23.8624C44.9077 23.8695 43.9979 22.9577 43.875 21.8361C43.3797 17.3107 41.3425 13.0671 38.0713 9.83704C34.3128 6.12575 29.2326 4.05544 23.9463 4.0802C18.6599 4.10507 13.5994 6.22334 9.87598 9.96985C6.15258 13.7164 4.07031 18.7849 4.08691 24.0626C4.10352 29.3404 6.21698 34.3961 9.96387 38.1193C13.7108 41.8424 18.7848 43.9283 24.0713 43.92C29.3577 43.9117 34.425 41.8092 38.1602 38.0743C41.4107 34.8239 43.4219 30.5684 43.8887 26.0402C44.0044 24.9177 44.9078 24.0003 46.0361 24.0001C47.1646 24.0001 48.0892 24.9167 47.9932 26.0411C47.5137 31.6522 45.0679 36.9413 41.0518 40.9572C36.5517 45.4569 30.4472 47.99 24.0781 48.0001C17.7089 48.0101 11.5954 45.4966 7.08105 41.0109C2.56674 36.5251 0.0200093 30.434 0 24.0753C-0.0199691 17.7166 2.48862 11.6097 6.97461 7.09583C11.4606 2.58198 17.5577 0.0300862 23.9268 0.00012207Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.16078431904315948,&quot;g&quot;:0.39215686917304993,&quot;b&quot;:0.62745100259780884,&quot;a&quot;:0.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.16078431904315948,&quot;g&quot;:0.39215686917304993,&quot;b&quot;:0.62745100259780884,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.16078431904315948,&quot;g&quot;:0.39215686917304993,&quot;b&quot;:0.62745100259780884,&quot;a&quot;:0.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.16078431904315948,&quot;g&quot;:0.39215686917304993,&quot;b&quot;:0.62745100259780884,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:48.158504486083984,&quot;m01&quot;:-0.00015259353676810861,&quot;m02&quot;:-0.079098686575889587,&quot;m10&quot;:0.00015259397332556546,&quot;m11&quot;:48.003398895263672,&quot;m12&quot;:-0.0015066617634147406},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                        <defs>
                            <clipPath id="paint0_angular_3277_5812_clip_path"><path d="M23.9268 0.00012207C30.2959 -0.0298029 36.4169 2.46514 40.9453 6.93665C44.9864 10.9272 47.4647 16.2009 47.9795 21.8087C48.0827 22.9325 47.1646 23.8553 46.0361 23.8624C44.9077 23.8695 43.9979 22.9577 43.875 21.8361C43.3797 17.3107 41.3425 13.0671 38.0713 9.83704C34.3128 6.12575 29.2326 4.05544 23.9463 4.0802C18.6599 4.10507 13.5994 6.22334 9.87598 9.96985C6.15258 13.7164 4.07031 18.7849 4.08691 24.0626C4.10352 29.3404 6.21698 34.3961 9.96387 38.1193C13.7108 41.8424 18.7848 43.9283 24.0713 43.92C29.3577 43.9117 34.425 41.8092 38.1602 38.0743C41.4107 34.8239 43.4219 30.5684 43.8887 26.0402C44.0044 24.9177 44.9078 24.0003 46.0361 24.0001C47.1646 24.0001 48.0892 24.9167 47.9932 26.0411C47.5137 31.6522 45.0679 36.9413 41.0518 40.9572C36.5517 45.4569 30.4472 47.99 24.0781 48.0001C17.7089 48.0101 11.5954 45.4966 7.08105 41.0109C2.56674 36.5251 0.0200093 30.434 0 24.0753C-0.0199691 17.7166 2.48862 11.6097 6.97461 7.09583C11.4606 2.58198 17.5577 0.0300862 23.9268 0.00012207Z" /></clipPath></defs>

                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width={loaderSize[size]} height={loaderSize[size]} className={(style.svgLoader)} viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#paint0_angular_4427_112_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.0120394 3.81485e-08 -3.81476e-08 0.0120009 11.9998 12.0001)"><foreignObject x="-999.939" y="-999.939" width="1999.88" height="1999.88"><div style={{ background: "conic-gradient(from 90deg,rgba(255, 255, 255, 0) 0deg,rgba(255, 255, 255, 1) 360deg)", height: "100%", width: "100%", opacity: 1 }}></div></foreignObject></g></g><path d="M11.9629 0.000133453C15.1475 -0.0148486 18.2085 1.23217 20.4727 3.46791C22.4933 5.46315 23.7319 8.10056 23.9893 10.9044C24.0407 11.4662 23.5818 11.9273 23.0176 11.9308C22.4536 11.9343 21.9991 11.4787 21.9376 10.9181C21.6899 8.65543 20.6708 6.53313 19.0352 4.9181C17.156 3.0626 14.6158 2.02774 11.9727 2.04017C9.32961 2.05266 6.79918 3.11129 4.93756 4.98451C3.07592 6.85776 2.0357 9.39257 2.044 12.0314C2.05239 14.6701 3.10916 17.1973 4.98248 19.0587C6.85581 20.9202 9.39215 21.9641 12.0352 21.9601C14.6784 21.9559 17.2126 20.9047 19.0801 19.0372C20.7055 17.412 21.711 15.2838 21.9444 13.0197C22.0023 12.4586 22.4536 12.0003 23.0176 12.0001C23.5819 12.0001 24.0442 12.4584 23.9962 13.0206C23.7563 15.826 22.5334 18.4708 20.5254 20.4786C18.2755 22.7283 15.2234 23.9951 12.0391 24.0001C8.85464 24.0051 5.79819 22.7477 3.54107 20.505C1.28394 18.2622 0.0100631 15.2166 5.85959e-05 12.0372C-0.00987857 8.85803 1.24446 5.80486 3.48736 3.54799C5.73026 1.29112 8.77853 0.0151992 11.9629 0.000133453Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:24.078762054443359,&quot;m01&quot;:-7.6295204053167254e-05,&quot;m02&quot;:-0.039548534899950027,&quot;m10&quot;:7.6296986662782729e-05,&quot;m11&quot;:24.001701354980469,&quot;m12&quot;:-0.00081436609616503119},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                        <defs>
                            <clipPath id="paint0_angular_4427_112_clip_path"><path d="M11.9629 0.000133453C15.1475 -0.0148486 18.2085 1.23217 20.4727 3.46791C22.4933 5.46315 23.7319 8.10056 23.9893 10.9044C24.0407 11.4662 23.5818 11.9273 23.0176 11.9308C22.4536 11.9343 21.9991 11.4787 21.9376 10.9181C21.6899 8.65543 20.6708 6.53313 19.0352 4.9181C17.156 3.0626 14.6158 2.02774 11.9727 2.04017C9.32961 2.05266 6.79918 3.11129 4.93756 4.98451C3.07592 6.85776 2.0357 9.39257 2.044 12.0314C2.05239 14.6701 3.10916 17.1973 4.98248 19.0587C6.85581 20.9202 9.39215 21.9641 12.0352 21.9601C14.6784 21.9559 17.2126 20.9047 19.0801 19.0372C20.7055 17.412 21.711 15.2838 21.9444 13.0197C22.0023 12.4586 22.4536 12.0003 23.0176 12.0001C23.5819 12.0001 24.0442 12.4584 23.9962 13.0206C23.7563 15.826 22.5334 18.4708 20.5254 20.4786C18.2755 22.7283 15.2234 23.9951 12.0391 24.0001C8.85464 24.0051 5.79819 22.7477 3.54107 20.505C1.28394 18.2622 0.0100631 15.2166 5.85959e-05 12.0372C-0.00987857 8.85803 1.24446 5.80486 3.48736 3.54799C5.73026 1.29112 8.77853 0.0151992 11.9629 0.000133453Z" /></clipPath></defs>
                    </svg>}
                {showLabel && <span role="status" aria-live="polite" className={(style.label)} data-size={size} data-appearance={appearance}>{label}</span>}
            </div>
        );
    }
);

export default Loader;