import React from 'react'

const frogotPassword = () => {
  return (
    <div class="container d-flex align-items-center justify-content-center min-vh-100">
        <div class="card shadow-lg p-5 style={{width: col-md-5 col-ml-5 col-sm-5; max-width: 500px;}}">
            <div class="text-center mb-4">
                <h2 class="mb-1">Forgot Password</h2>
                <p class="text-muted">Enter your email to reset your password</p>
            </div>
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="new-password">New Password</label>
                    <div class="input-group">
                        <input type="password" class="form-control" id="new-password" placeholder="New Password" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary toggle-password" type="button">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm New Password</label>
                    <div class="input-group">
                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm New Password" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary toggle-password" type="button">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Reset Password</button>
                <div class="text-center mt-3">
                    <a href="login" class="text-decoration-none">Back to Login</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default frogotPassword