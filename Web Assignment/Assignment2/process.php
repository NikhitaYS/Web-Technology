<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Success - My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div class="container">
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
                        <span><?php echo htmlspecialchars($_POST['firstName'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Last Name:</strong>
                        <span><?php echo htmlspecialchars($_POST['lastName'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Email:</strong>
                        <span><?php echo htmlspecialchars($_POST['email'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Phone:</strong>
                        <span><?php echo htmlspecialchars($_POST['phone'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Date of Birth:</strong>
                        <span><?php echo htmlspecialchars($_POST['dateOfBirth'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Gender:</strong>
                        <span><?php echo htmlspecialchars($_POST['gender'] ?? 'N/A'); ?></span>
                    </div>
                </div>
            </div>

            <div class="result-section">
                <h2>Address Information</h2>
                <div class="result-grid">
                    <div class="result-item">
                        <strong>Address:</strong>
                        <span><?php echo htmlspecialchars($_POST['address'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>City:</strong>
                        <span><?php echo htmlspecialchars($_POST['city'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>State:</strong>
                        <span><?php echo htmlspecialchars($_POST['state'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Zip Code:</strong>
                        <span><?php echo htmlspecialchars($_POST['zipCode'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Country:</strong>
                        <span><?php echo htmlspecialchars($_POST['country'] ?? 'N/A'); ?></span>
                    </div>
                </div>
            </div>

            <div class="result-section">
                <h2>Educational Information</h2>
                <div class="result-grid">
                    <div class="result-item">
                        <strong>Education Level:</strong>
                        <span><?php echo htmlspecialchars($_POST['education'] ?? 'N/A'); ?></span>
                    </div>
                    <div class="result-item">
                        <strong>Course/Program:</strong>
                        <span><?php echo htmlspecialchars($_POST['course'] ?? 'N/A'); ?></span>
                    </div>
                </div>
            </div>

            <?php if (!empty($_POST['interests'])): ?>
            <div class="result-section">
                <h2>Interests</h2>
                <div class="interests-list">
                    <?php 
                    $interests = $_POST['interests'];
                    foreach ($interests as $interest): 
                    ?>
                        <span class="interest-tag"><?php echo htmlspecialchars($interest); ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
            <?php endif; ?>

            <?php if (!empty($_POST['comments'])): ?>
            <div class="result-section">
                <h2>Additional Comments</h2>
                <div class="result-item">
                    <span><?php echo nl2br(htmlspecialchars($_POST['comments'])); ?></span>
                </div>
            </div>
            <?php endif; ?>

            <div class="back-button">
                <a href="index.html">Back to Registration Form</a>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

