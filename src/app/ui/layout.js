const { ErrorBoundary } = require("next/dist/client/components/error-boundary");
const { NotFoundBoundary } = require("next/dist/client/components/not-found-boundary");
const { Suspense } = require("react");

<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary fallback={<NotFoundBoundary />}>
                    <Page />
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>