import React, { ReactNode, useEffect, useState } from "react";

export class ErrorBoundary extends React.Component<
	{ children: ReactNode },
	{ hasError: boolean }
> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error);
		console.log(errorInfo);
	}

	static getDerivedStateFromError(error: any) {
		console.log(error);
		return { hasError: true };
	}

	render(): React.ReactNode {
		if (!this.state.hasError) {
			return this.props.children;
		}

		return <div>error</div>;
	}
}
