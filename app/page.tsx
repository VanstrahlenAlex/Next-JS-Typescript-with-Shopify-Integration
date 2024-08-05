"use client";
import { Button } from "@/components/ui/button";
import play from "@/playground";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
	
	useEffect(() => {
		play()
	}, []);

	return (
		<>
			<Button>Login</Button>
		</>
	);
}
