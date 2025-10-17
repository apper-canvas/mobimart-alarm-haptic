import { useSearchParams, Link } from 'react-router-dom';

const ErrorPage = () => {
  const [searchParams] = useSearchParams();
  const errorMessage = searchParams.get('message') || 'An error occurred';
  
  // Check if this is the public profile error
  const isPublicProfileError = errorMessage.includes('Public profile not enabled');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-center">Authentication Error</h1>
        </div>

        {/* Content */}
        <div className="p-8">
          {isPublicProfileError ? (
            <>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6 rounded-r-lg">
                <h2 className="text-xl font-semibold text-red-900 mb-3">Public Profile Not Enabled</h2>
                <p className="text-red-800 mb-4 leading-relaxed">
                  {errorMessage}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  What does this mean?
                </h3>
                <p className="text-blue-800 mb-4">
                  Your Apper application requires the "Public Profile" feature to be enabled for user authentication to work properly. This is a project-level setting that needs to be configured in your Apper dashboard.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  How to fix this:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-green-800">
                  <li>Log in to your Apper dashboard</li>
                  <li>Navigate to your project settings (Project ID: <code className="bg-green-100 px-2 py-1 rounded text-sm">d34d7be00d23434680e49e5b9f639e4d</code>)</li>
                  <li>Find the "Authentication" or "Security" section</li>
                  <li>Enable the "Public Profile" option</li>
                  <li>Save your changes and return here to try again</li>
                </ol>
              </div>
            </>
          ) : (
            <div className="bg-gray-50 border-l-4 border-gray-600 p-6 mb-6 rounded-r-lg">
              <p className="text-gray-800 text-lg">{errorMessage}</p>
            </div>
          )}

          {/* Action Button */}
          <div className="flex justify-center">
            <Link 
              to="/login" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;