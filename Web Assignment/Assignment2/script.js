// jQuery ready function
$(document).ready(function() {
    // Form validation and submission
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Basic client-side validation
        let isValid = true;
        
        // Check all required fields
        $(this).find('input[required], select[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).css('border-color', '#f5576c');
            } else {
                $(this).css('border-color', '#e0e0e0');
            }
        });

        // Check terms checkbox
        if (!$('input[name="terms"]').is(':checked')) {
            isValid = false;
            alert('Please agree to the terms and conditions');
        }

        // Email validation
        const email = $('#email').val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailPattern.test(email)) {
            isValid = false;
            $('#email').css('border-color', '#f5576c');
            alert('Please enter a valid email address');
        }

        if (!isValid) {
            return false;
        }

        // Show loading state
        $('.btn-submit').text('Submitting...').prop('disabled', true);
        
        // Collect form data
        const formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            dateOfBirth: $('#dateOfBirth').val(),
            gender: $('#gender').val(),
            address: $('#address').val(),
            city: $('#city').val(),
            state: $('#state').val(),
            zipCode: $('#zipCode').val(),
            country: $('#country').val(),
            education: $('#education').val(),
            course: $('#course').val(),
            interests: [],
            comments: $('#comments').val()
        };
        
        // Collect checked interests
        $('input[name="interests[]"]:checked').each(function() {
            formData.interests.push($(this).val());
        });
        
        // Display results
        displayFormResults(formData);
    });
    
    // Function to display form results
    function displayFormResults(data) {
        // Create result HTML
        let interestsHTML = '';
        if (data.interests.length > 0) {
            interestsHTML = '<div class="result-section"><h2>Interests</h2><div class="interests-list">';
            data.interests.forEach(function(interest) {
                interestsHTML += '<span class="interest-tag">' + escapeHtml(interest) + '</span>';
            });
            interestsHTML += '</div></div>';
        }
        
        let commentsHTML = '';
        if (data.comments && data.comments.trim() !== '') {
            commentsHTML = '<div class="result-section"><h2>Additional Comments</h2><div class="result-item"><span>' + escapeHtml(data.comments).replace(/\n/g, '<br>') + '</span></div></div>';
        }
        
        const resultHTML = `
            <div class="result-wrapper">
                <h1 class="result-title">Registration Successful!</h1>
                <div class="success-message">
                    ✓ Your registration has been submitted successfully!
                </div>

                <div class="result-section">
                    <h2>Personal Information</h2>
                    <div class="result-grid">
                        <div class="result-item">
                            <strong>First Name:</strong>
                            <span>${escapeHtml(data.firstName)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Last Name:</strong>
                            <span>${escapeHtml(data.lastName)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Email:</strong>
                            <span>${escapeHtml(data.email)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Phone:</strong>
                            <span>${escapeHtml(data.phone)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Date of Birth:</strong>
                            <span>${escapeHtml(data.dateOfBirth)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Gender:</strong>
                            <span>${escapeHtml(data.gender)}</span>
                        </div>
                    </div>
                </div>

                <div class="result-section">
                    <h2>Address Information</h2>
                    <div class="result-grid">
                        <div class="result-item">
                            <strong>Address:</strong>
                            <span>${escapeHtml(data.address)}</span>
                        </div>
                        <div class="result-item">
                            <strong>City:</strong>
                            <span>${escapeHtml(data.city)}</span>
                        </div>
                        <div class="result-item">
                            <strong>State:</strong>
                            <span>${escapeHtml(data.state)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Zip Code:</strong>
                            <span>${escapeHtml(data.zipCode)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Country:</strong>
                            <span>${escapeHtml(data.country)}</span>
                        </div>
                    </div>
                </div>

                <div class="result-section">
                    <h2>Educational Information</h2>
                    <div class="result-grid">
                        <div class="result-item">
                            <strong>Education Level:</strong>
                            <span>${escapeHtml(data.education)}</span>
                        </div>
                        <div class="result-item">
                            <strong>Course/Program:</strong>
                            <span>${escapeHtml(data.course)}</span>
                        </div>
                    </div>
                </div>

                ${interestsHTML}
                ${commentsHTML}

                <div class="back-button">
                    <a href="#" onclick="location.reload(); return false;">Back to Registration Form</a>
                </div>
            </div>
        `;
        
        // Replace form with results
        $('.form-wrapper').fadeOut(300, function() {
            $('.container').html(resultHTML);
            $('.result-wrapper').hide().fadeIn(500);
        });
    }
    
    // Function to escape HTML to prevent XSS
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text ? text.toString().replace(/[&<>"']/g, function(m) { return map[m]; }) : '';
    }

    // Real-time validation feedback
    $('input, select, textarea').on('blur', function() {
        if ($(this).prop('required') && $(this).val().trim() === '') {
            $(this).css('border-color', '#f5576c');
        } else {
            $(this).css('border-color', '#667eea');
        }
    });

    // Phone number formatting
    $('#phone').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        if (value.length > 0) {
            value = value.match(/.{1,3}/g).join('-');
            if (value.length > 12) value = value.substr(0, 12);
        }
        $(this).val(value);
    });

    // Add animation to form elements
    $('.form-group').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        }).delay(index * 50).animate({
            'opacity': '1',
            'transform': 'translateY(0)'
        }, 400);
    });

    // Reset form button
    $('.btn-reset').on('click', function() {
        $('#registrationForm')[0].reset();
        $('input, select, textarea').css('border-color', '#e0e0e0');
    });

    // Checkbox animation
    $('input[type="checkbox"]').on('change', function() {
        if ($(this).is(':checked')) {
            $(this).closest('.checkbox-label').css('background', 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)');
        } else {
            $(this).closest('.checkbox-label').css('background', 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)');
        }
    });

    console.log('Registration form loaded successfully!');
});

