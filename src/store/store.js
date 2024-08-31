import axios from "axios";
import { create } from "zustand";

const useStore = create((set, get) => ({
  fetchedInvoices: [],
  invoices: [],
  assignedInvoiceNumber: "",
  fees: [],
  paymentDetails: {},

  selectedInvoice: {},
  selectedFees: {},

  users: [],
  selectedUser: {},

  //invoices

  fetchInvoices: async (params) => {
    try {
      const {
        data: { invoices, assigned_invoice_number },
      } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/invoices/get_data.php`
      );
      if (!!invoices && invoices.length > 0) {
        get().setInvoices(invoices);
        set(() => ({ fetchedInvoices: invoices }));
        set(() => ({ assignedInvoiceNumber: assigned_invoice_number }));
        if (params && params.autoSelect) {
          get().setSelectedInvoice(invoices[0]);
        } else if (params && params.selectNumber) {
          const index = invoices.findIndex(
            (invoice) => invoice.invoice_number === params.selectNumber
          );
          get().setSelectedInvoice(invoices[index]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  },

  setInvoices: (invoices) => set(() => ({ invoices: invoices })),
  setFees: (fees) => set(() => ({ fees: fees })),

  selectInvoice: (invoiceNumber) => {
    if (!!invoiceNumber) {
      const invoice = get().invoices.find(
        (i) => i.invoice_number === invoiceNumber
      );
      console.log(invoice);
      get().setSelectedInvoice(invoice);
    }
  },

  setSelectedInvoice: (invoice) => {
    if (!!invoice) {
      console.log("fees");
      console.log(invoice.fees);
      set(() => ({ selectedInvoice: invoice }));
      get().setSelectedFee(invoice.fees);
    }
  },

  filterInvoices: (invoiceNumber) => {
    const trimmedInvoiceNumber = invoiceNumber.trim().replace(" ", "");
    if (trimmedInvoiceNumber === "") {
      console.log("DONT DO ANYTHING");
      get().setInvoices(get().fetchedInvoices);
      return;
    }
    const filtered = get().fetchedInvoices.filter((i) =>
      i.invoice_number.includes(trimmedInvoiceNumber)
    );
    get().setInvoices(filtered);
  },

  //fees
  setSelectedFee: (fee) => set(() => ({ selectedFees: fee })),

  //users
  setUsers: (users) => set(() => ({ users: users })),
  setSelectedUser: (user) => set(() => ({ selectedUser: user })),

  //payments
  setPaymentDetails: (payment) => set(() => ({ paymentDetails: payment })),

  //summary
}));

export default useStore;
