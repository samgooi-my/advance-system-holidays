// ===== CONTACT FORM SUBMISSION =====
    // Function: handleFormSubmit()
    // Purpose: Capture form data and redirect with URL parameters for contact tracking
    // Triggers: Submit event from the contact inquiry form
    function handleFormSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const params = new URLSearchParams({
        full_name: formData.get('full_name') || '',
        email: '',
        phone: formData.get('phone') || '',
        destination: formData.get('destination') || '',
        travel_dates: formData.get('travel_dates') || '',
        travellers: formData.get('travellers') || '',
        agent: '48257001',
        tags: 'travel,holiday,kl,pandan-prima'
      });
      const message = `Thank you, ${formData.get('full_name') || 'traveller'}! We have received your trip request and will contact you soon.`;
      const notice = document.createElement('div');
      notice.setAttribute('role', 'status');
      notice.className = 'fixed bottom-4 left-4 right-4 mx-auto max-w-xl rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-xl';
      notice.textContent = message;
      document.body.appendChild(notice);
      setTimeout(() => notice.remove(), 4500);
    }