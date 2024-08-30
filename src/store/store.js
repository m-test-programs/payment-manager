import { create } from "zustand";

const useStore = create((set, get) => ({
  invoices: [],
  fees: [],

  selectedInvoice: {},
  selectedFees: {},

  users: [],
  selectedUser: {},

  setInvoices: (invoices) => set(() => ({ invoices: invoices })),
  setFees: (fees) => set(() => ({ fees: fees })),

  selectInvoice: (invoiceNumber) => {
    console.log("OH SI SELEZIONA IL CULO");
    console.log(invoiceNumber);
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
  setSelectedFee: (fee) => set(() => ({ selectedFees: fee })),

  setUsers: (users) => set(() => ({ users: users })),
  setSelectedUser: (user) => set(() => ({ selectedUser: user })),
}));

export default useStore;
