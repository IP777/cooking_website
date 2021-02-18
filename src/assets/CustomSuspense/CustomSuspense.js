import React, { Suspense } from "react";

// const Component = React.lazy(() =>
// import("../../component/CardList/CardsList")
// );

export default function CustomSuspense({ children }) {
	return <Suspense fallback={<div>Загрузка...</div>}>{children}</Suspense>;
}
