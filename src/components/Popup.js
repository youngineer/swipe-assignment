import React, { useState } from 'react';
import Popup from 'reactjs-popup'; 

const ValidationPopup = ({ data, type, onSubmit }) => {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const getFields = () => {
    switch (type) {
      case 'product':
        return [
          { name: 'name', label: 'Product Name', type: 'text' },
          { name: 'quantity', label: 'Quantity', type: 'number' },
          { name: 'unitPrice', label: 'Unit Price', type: 'number' },
          { name: 'tax', label: 'Tax', type: 'number' }
        ];
      case 'customer':
        return [
          { name: 'customerName', label: 'Customer Name', type: 'text' },
          { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
          { name: 'totalPurchaseAmount', label: 'Total Purchase Amount', type: 'number' }
        ];
      case 'invoice':
        return [
          { name: 'serialNumber', label: 'Serial Number', type: 'text' },
          { name: 'customerName', label: 'Customer Name', type: 'text' },
          { name: 'productName', label: 'Product Name', type: 'text' },
          { name: 'quantity', label: 'Quantity', type: 'number' },
          { name: 'price', label: 'Price', type: 'number' },
          { name: 'tax', label: 'Tax', type: 'number' },
          { name: 'date', label: 'Date', type: 'date' }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="popup-content">
      <h2 className="text-xl font-bold mb-4">Complete {type} Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {getFields().map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            <input
              type={field.type}
              value={formData[field.name] || ''}
              onChange={(e) => setFormData({
                ...formData,
                [field.name]: field.type === 'number' ? parseFloat(e.target.value) : e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const ControlledPopup = ({ type, initialData }) => {
  const [open, setOpen] = useState(false);
  const [entity, setEntity] = useState(null);

  const closeModal = () => setOpen(false);

  const handleSubmit = (formData) => {
    setEntity(formData); // Save the submitted entity
    console.log('Submitted Entity:', formData); // Log the submitted data
    closeModal(); // Close the popup
  };

  return (
    <div>
      <button
        type="button"
        className="button px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(true)}
      >
        Open {type} Popup
      </button>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <ValidationPopup
          data={initialData}
          type={type}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      </Popup>

      {entity && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h3 className="font-bold">Submitted {type} Data:</h3>
          <pre>{JSON.stringify(entity, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ControlledPopup;
