import React from 'react'

const signUp = () => {
  return (
    <div class="container d-flex align-items-center justify-content-center min-vh-100">
        <div class="card shadow-lg p-5 style={{width: col-md-5 col-ml-5 col-sm-5; max-width: 500px;}}">
            <div class="text-center mb-4">
                <h2 class="mb-1">Sign Up</h2>
                <p class="text-muted">Tea Leaves Disease Detection System</p>
            </div>
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter username" required />
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <div class="input-group">
                        <input type="password" class="form-control" id="password" placeholder="Password" required />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary toggle-password" type="button">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <div class="input-group">
                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password" required /> 
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary toggle-password" type="button">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                <div class="text-center mt-3">
                    <p>Already have an account? <a href="login" class="text-decoration-none">Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default signUp