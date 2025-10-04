# Cloudflare R2 File Uploader Demo

This project is a functional sample application designed to demonstrate **direct client-side file uploads to Cloudflare R2** from a React application. It leverages Cloudflare Pages for frontend hosting and Cloudflare R2 for object storage.

## Project Goal

The primary goal of this application is to provide a clear, working example of client-side interaction with R2 using the AWS SDK for JavaScript. The core logic in this app can be adapted for various projects, such as:
*   **Inventory systems** (for storing item photos)
*   **Blogs** (for managing images and media)
*   **Internal HR systems** (for employee documents)
*   **Job sites** (for resumes and portfolios)
*   And many other applications requiring secure and scalable object storage.

## Current Features

*   **Frontend Application:** A React application hosted on Cloudflare Pages.
*   **R2 File Uploader Component:** Allows users to select a file and upload it directly to a configured Cloudflare R2 bucket.
    *   Option to randomize the uploaded filename.
    *   Provides visual feedback (loading, success, error toasts) during the upload process.

## Tech Stack (Current)

*   **Frontend:** React, TypeScript, Tailwind CSS, shadcn/ui
*   **Core Libraries:** React Router, React Query, AWS SDK S3 Client (`@aws-sdk/client-s3`) for R2 interaction
*   **Hosting:** Cloudflare Pages
*   **Object Storage:** Cloudflare R2

## Architecture Overview (Current)

The current application architecture is straightforward:

1.  **Frontend (Cloudflare Pages):** The React application is hosted on Cloudflare Pages and provides the user interface.
2.  **Object Storage (Cloudflare R2):** Cloudflare R2 is used as the storage solution for uploaded files.
3.  **Direct Client-Side Upload:** Files are uploaded directly from the user's browser to R2. This process uses R2 API keys configured as environment variables, which are exposed on the client side.

**Important Security Warning:**
The current `R2Uploader` component directly uses R2 API keys on the client side for demonstration purposes. **This is highly insecure and NOT suitable for production environments.** In a real-world application, all R2 interactions (especially uploads) should be mediated by a secure backend (like Cloudflare Workers) that generates pre-signed URLs, ensuring that sensitive API keys are never exposed to the client.

## Setup and Local Development

### Prerequisites

*   Node.js (v18 or higher)
*   npm or Yarn
*   A Cloudflare account (for R2 and Pages)

### Frontend Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd cloudflare-r2-uploader-demo
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Environment Variables (Local Development):**
    Create a `.env` file in the root of the project and add your Cloudflare R2 credentials.
    **WARNING: These keys will be exposed on the client-side in this current setup. Use this ONLY for development and testing.**

    ```env
    VITE_R2_ACCOUNT_ID="YOUR_CLOUDFLARE_ACCOUNT_ID"
    VITE_R2_BUCKET_NAME="YOUR_R2_BUCKET_NAME"
    VITE_R2_ACCESS_KEY_ID="YOUR_R2_ACCESS_KEY_ID"
    VITE_R2_SECRET_ACCESS_KEY="YOUR_R2_SECRET_ACCESS_KEY"
    ```
    You can find these details in your Cloudflare R2 dashboard under "Manage R2 API Tokens".

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:8080`.

### Cloudflare R2 Setup

1.  Log in to your Cloudflare dashboard.
2.  Navigate to "R2" and create a new bucket.
3.  Go to "Manage R2 API Tokens" and create a new API token with "Object Read & Write" permissions for your bucket.
4.  Copy the Account ID, Access Key ID, and Secret Access Key into your `.env` file for local development.

## Deployment to Cloudflare Pages

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Log in to your Cloudflare dashboard and navigate to "Pages".
3.  Create a new project, connect your Git repository, and select the branch you want to deploy.
4.  **Crucially, configure your R2 environment variables in the Cloudflare Pages project settings.** Go to `Settings > Environment variables` for your Pages project. Add `VITE_R2_ACCOUNT_ID`, `VITE_R2_BUCKET_NAME`, `VITE_R2_ACCESS_KEY_ID`, and `VITE_R2_SECRET_ACCESS_KEY` here. Cloudflare Pages will securely inject these during the build process, making them available to your application.
5.  Set the build command to `npm run build` (or `yarn build`) and the build output directory to `dist`.
6.  Deploy your project.

## Contributing

Feel free to fork the repository and submit pull requests.

## Donate

Love our work? 

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/kodester/)

## License

MIT License