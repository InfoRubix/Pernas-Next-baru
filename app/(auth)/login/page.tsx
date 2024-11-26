import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from '@/components/auth/login-form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Login - PERNAS Next',
  description: 'Login to your PERNAS account',
};

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            src="/logo.svg"
            alt="PERNAS Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          PERNAS Next
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;PERNAS Next has revolutionized how we handle legal cases and document management.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis, Legal Director</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertDescription className="ml-2">
              <strong>Demo Credentials:</strong>
              <br />
              Admin: admin@pernas.com
              <br />
              Solicitor: solicitor@pernas.com
              <br />
              (Any password will work)
            </AlertDescription>
          </Alert>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/register" className="hover:text-brand underline underline-offset-4">
              Don&apos;t have an account? Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}