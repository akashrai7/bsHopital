
import React, { JSX, useEffect, useRef, useState } from 'react';
import { Grid, html } from 'gridjs';
import Swal from 'sweetalert2';
import 'gridjs/dist/theme/mermaid.css';
interface SelectType {
  value:string;
  label:string;
}

export const CustomerSelect:SelectType[] = [
  {value:'Customer', label:'Customer'},
  {value:'All Status', label:'All Status'},
  {value:'Active', label:'Active'},
  {value:'Blocked', label:'Blocked'},
]

export const StatusSelect:SelectType[] = [
  {value:'Select', label:'Select'},
  {value:'Active', label:'Active'},
  {value:'Block', label:'Block'}
]


export const initialCustomerData = [
  ['192.168.1.1', 'John Doe', '../../../assets/images/faces/9.jpg', 'Active', 'Jan 15, 2025', 'john.doe@example.com'],
  ['192.168.1.2', 'Jane Smith', '../../../assets/images/faces/1.jpg', 'Blocked', 'Feb 3, 2025', 'jane.smith@example.com'],
  ['192.168.1.3', 'Michael Brown', '../../../assets/images/faces/10.jpg', 'Active', 'Mar 10, 2025', 'michael.brown@example.com'],
  ['192.168.1.4', 'Emily White', '../../../assets/images/faces/2.jpg', 'Active', 'Mar 12, 2025', 'emily.white@example.com'],
  ['192.168.1.5', 'Chris Johnson', '../../../assets/images/faces/11.jpg', 'Active', 'Jan 25, 2025', 'chris.johnson@example.com'],
  ['192.168.1.6', 'Sarah Lee', '../../../assets/images/faces/3.jpg', 'Blocked', 'Feb 14, 2025', 'sarah.lee@example.com'],
  ['192.168.1.7', 'David Green', '../../../assets/images/faces/13.jpg', 'Active', 'Mar 17, 2025', 'david.green@example.com'],
  ['192.168.1.8', 'Olivia Davis', '../../../assets/images/faces/4.jpg', 'Active', 'Feb 22, 2025', 'olivia.davis@example.com'],
  ['192.168.1.9', 'James Wilson', '../../../assets/images/faces/14.jpg', 'Active', 'Mar 5, 2025', 'james.wilson@example.com'],
  ['192.168.1.10', 'Sophia Martinez', '../../../assets/images/faces/5.jpg', 'Blocked', 'Jan 30, 2025', 'sophia.martinez@example.com'],
];



const CustomerList: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [customerData, setCustomerData] = useState(initialCustomerData);
  const gridInstanceRef = useRef<Grid | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = new Grid({
      columns: [
        {
          name: '#',
          formatter: (_, row) =>
            html(`
              <input class="form-check-input" type="checkbox" id="product-${row.cells[0].data}" aria-label="Select product">
            `),
        },
        {
          name: 'Customer Ip',
          formatter: (_, row) =>
            html(`<a href="javascript:void(0);">${row.cells[0].data}</a>`),
        },
        {
          name: 'Customer Name',
          formatter: (_, row) =>
            html(`
              <div class="d-flex align-items-center gap-3 position-relative">
                <div class="lh-1">
                  <span class="avatar avatar-lg bg-light">
                    <img src="${row.cells[2].data}" alt="Customer Image">
                  </span>
                </div>
                <div>
                  <span class="d-block fw-semibold">${row.cells[1].data}</span>
                  <span class="text-muted fs-13">${row.cells[5].data}</span>
                </div>
              </div>
            `),
        },
        {
          name: 'Status',
          formatter: (_, row) => html(`
            <span class="badge bg-${row.cells[3].data === 'Active' ? 'success-transparent' :
                              row.cells[3].data === 'Archived' ? 'success-transparent' : 'danger-transparent'
                          }">${row.cells[3].data}</span>
          `)
        },
        'Joining Date',
        {
          name: 'Actions',
          formatter: (_, row,rowIndex) =>
            html(`
              <span>
                    <button class="btn btn-sm btn-primary-transparent me-1">
                      <i class="ri-eye-line"></i>
                    </button>
                    <a class="btn btn-sm btn-danger-transparent btn-delete" data-index="${rowIndex}" href="javascript:void(0);">
                <i class="ri-delete-bin-line"></i>
              </a>
            </span>
            `),
        },
      ],
      data: customerData,
      pagination: true,
      sort: true,
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
  }, [customerData]);

  return <div ref={gridRef}></div>;
};

export default CustomerList;



