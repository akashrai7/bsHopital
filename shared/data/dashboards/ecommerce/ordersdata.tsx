
import React, { JSX, useEffect, useRef, useState } from 'react';
import { Grid, html } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';
import Swal from 'sweetalert2';
import { basePath } from '@/next.config';

const initialOrders = [
  ['#SPK001', 'John Doe', '../../../assets/images/faces/9.jpg', '$699.99', 'Pending', 'Pending', 'Visa Card', 'Jan 15, 2025, 09:45 AM', 'john.doe@example.com'],
  ['#SPK002', 'Jane Smith', '../../../assets/images/faces/1.jpg', '$89.99', 'Shipped', 'Completed', 'MasterCard', 'Feb 3, 2025, 02:30 PM', 'jane.smith@example.com'],
  ['#SPK003', 'Michael Brown', '../../../assets/images/faces/10.jpg', '$399.99', 'Delivered', 'Failed', 'PayPal', 'Mar 10, 2025, 11:15 AM', 'michael.brown@example.com'],
  ['#SPK004', 'Emily White', '../../../assets/images/faces/2.jpg', '$129.99', 'Cancelled', 'Refunded', 'Apple Pay', 'Apr 5, 2025, 04:00 PM', 'emily.white@example.com'],
  ['#SPK005', 'Chris Johnson', '../../../assets/images/faces/11.jpg', '$199.99', 'Shipped', 'Cancelled', 'COD', 'May 1, 2025, 10:30 AM', 'chris.johnson@example.com'],
  ['#SPK006', 'Sarah Lee', '../../../assets/images/faces/3.jpg', '$149.99', 'Delivered', 'Refunded', 'MasterCard', 'Jun 10, 2025, 03:45 PM', 'sarah.lee@example.com'],
  ['#SPK007', 'David Green', '../../../assets/images/faces/13.jpg', '$79.99', 'Delivered', 'Completed', 'PayPal', 'Jul 18, 2025, 01:00 PM', 'david.green@example.com'],
  ['#SPK008', 'Olivia Davis', '../../../assets/images/faces/4.jpg', '$59.99', 'Pending', 'Pending', 'American Express', 'Aug 25, 2025, 12:30 PM', 'olivia.davis@example.com'],
  ['#SPK009', 'James Wilson', '../../../assets/images/faces/14.jpg', '$59.99', 'Cancelled', 'Completed', 'Visa Card', 'Sep 5, 2025, 06:00 PM', 'james.wilson@example.com'],
  ['#SPK010', 'Sophia Martinez', '../../../assets/images/faces/5.jpg', '$39.99', 'Shipped', 'Failed', 'COD', 'Oct 12, 2025, 08:15 AM', 'sophia.martinez@example.com']
];

const OrdersTable: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [customerData, setCustomerData] = useState(initialOrders);
  const gridInstanceRef = useRef<Grid | null>(null);


  // Render the initial Grid
  useEffect(() => {
    if (!gridRef.current) return;
      const grid = new Grid({
        columns: [
          {
            name: '#',
            formatter: (_, row) => html(`
              <input class="form-check-input" type="checkbox" id="product-${row.cells[0].data}" aria-label="Select product">
            `)
          },
          {
            name: 'Order ID',
            formatter: (_, row) => html(`
              <a href="javascript:void(0);" class="text-primary text-decoration-underline">${row.cells[0].data}</a>
            `)
          },
          {
            name: 'Customer',
            formatter: (_, row) => html(`
              <a href="${process.env.NODE_ENV === 'production' ? basePath : ''}/dashboards/ecommerce/order-details">
                <div class="d-flex align-items-center gap-3 position-relative">
                  <div class="lh-1">
                    <span class="avatar avatar-md avatar-rounded">
                      <img src="${row.cells[2].data}" alt="Product Image">
                    </span>
                  </div>
                  <div>
                    <span class="d-block fw-semibold">${row.cells[1].data}</span>
                    <span class="text-muted fs-13">${row.cells[8].data}</span>
                  </div>
                </div>
              </a>
            `)
          },
          'Price',
          {
            name: 'Delivery Status',
            formatter: (_, row) => html(
              `<span class="badge bg-${row.cells[4].data === 'Pending' ? 'warning' : row.cells[4].data === 'Shipped' ? 'info' : row.cells[4].data === 'Delivered' ? 'success' : 'danger'}-transparent">${row.cells[4].data}</span>`
            )
          },
          {
            name: 'Payment Method',
            formatter: (_, row) => html(
                `${row.cells[6].data}`
            )
        },
        {
          name: 'Payment Status',
          formatter: (_, row) => html(
              `<span class="text-${row.cells[5].data === 'Pending' ? 'info' : row.cells[5].data === 'Completed' ? 'success' : row.cells[5].data === 'Failed' ? 'orange' : row.cells[5].data === 'Refunded' ? 'warning' : 'danger'}"><i class="ri-circle-fill me-1 fs-10"></i>${row.cells[5].data}</span>`
          )
      },
          'Ordered Date',
          {
            name: 'Actions',
            formatter: (_, rowIndex) =>
                        html(`
                          <span>
                                <a  href="${process.env.NODE_ENV === 'production' ? basePath : ''}/dashboards/ecommerce/order-details" class="btn btn-sm btn-primary-transparent me-1">
                                  <i class="ri-eye-line"></i>
                                </a>
                                <a class="btn btn-sm btn-danger-transparent btn-delete" data-index="${rowIndex}" href="javascript:void(0);">
                            <i class="ri-delete-bin-line"></i>
                          </a>
                        </span>
                        `),
          }
        ],
        data: customerData,
        pagination: true,
        search: false,
        sort: true
      });

      grid.render(gridRef.current);
          gridInstanceRef.current = grid;
      
          // Delete button event delegation
          const handleDelete = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const btn = target.closest('.btn-delete') as HTMLElement;
            if (btn && btn.dataset.index !== undefined) {
              const index = parseInt(btn.dataset.index);
              Swal.fire({
                title: 'Are you sure?',
                text: "This action cannot be undone.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
              }).then((result) => {
                if (result.isConfirmed) {
                  const updatedData = [...customerData];
                  updatedData.splice(index, 1);
                  setCustomerData(updatedData);
                  Swal.fire('Deleted!', 'Customer has been deleted.', 'success');
                }
              });
            }
          };
      
          document.addEventListener('click', handleDelete);
      
          return () => {
            document.removeEventListener('click', handleDelete);
            grid.destroy();
          };
        }, [customerData])
      
        return <div ref={gridRef}></div>;
      };

export default OrdersTable;



interface CardData {
  titles: string;
  count: string;
  percent: string;
  svgIcon: React.ReactNode;
  priceColor: string;
  icon: string;
  iconColor: string;
  ValueClass: string;
  smallText: string;
  avatarClass: string;
}

export const OrdersCard: CardData[] = [
  {
    titles: 'Total Orders',
    count: "2450",
    percent: "16.67%",
    ValueClass: "my-2 fw-semibold lh-1",
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Z" />
      </svg>
    ),
    priceColor: 'primary',
    smallText: 'lh-base',
    icon: 'ti ti-trending-up me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'success fw-medium',
    avatarClass: 'avatar-md flex-shrink-0'
  },
  {
    titles: 'Pending Orders',
    count: "300",
    percent: "20%",
    ValueClass: "my-2 fw-semibold lh-1",
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
      </svg>
    ),
    priceColor: 'secondary',
    smallText: 'lh-base',
    icon: 'ti ti-trending-up me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'success fw-medium',
    avatarClass: 'avatar-md flex-shrink-0'
  },
  {
    titles: 'Delivered',
    count: "1800",
    percent: "5.88%",
    ValueClass: "my-2 fw-semibold lh-1",
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z" />
      </svg>
    ),
    priceColor: 'warning',
    smallText: 'lh-base',
    icon: 'ti ti-trending-up me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'success fw-medium',
    avatarClass: 'avatar-md flex-shrink-0'
  },
  {
    titles: 'Cancelled',
    count: "100",
    percent: "16.67%",
    ValueClass: "my-2 fw-semibold lh-1",
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
      </svg>
    ),
    priceColor: 'success',
    smallText: 'lh-base',
    icon: 'ti ti-trending-down me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'danger fw-medium',
    avatarClass: 'avatar-md flex-shrink-0'
  },
  {
    titles: 'Returned',
    count: "50",
    percent: "28.57%",
    ValueClass: "my-2 fw-semibold lh-1",
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z" />
      </svg>
    ),
    priceColor: 'info',
    smallText: 'lh-base',
    icon: 'ti ti-trending-down me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'danger fw-medium',
    avatarClass: 'avatar-md flex-shrink-0'
  }
];

interface SelectType {
  value: string;
  label: string;
}

export const PaymenntStatus: SelectType[] = [
  { value: 'Payment Status', label: 'Payment Status' },
  { value: 'All Status', label: 'All Status' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Failed', label: 'Failed' },
  { value: 'Refunded', label: 'Refunded' },
  { value: 'Cancelled', label: 'Cancelled' },
]
export const DeliveryStatus: SelectType[] = [
  { value: 'Delivery Status', label: 'Delivery Status' },
  { value: 'All Status', label: 'All Status' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Shipped', label: 'Shipped' },
  { value: 'Delivered', label: 'Delivered' },
  { value: 'Cancelled', label: 'Cancelled' },
]
