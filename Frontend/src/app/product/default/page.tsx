'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOrganic';
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct';
import Default from '@/components/Product/Detail/Default';
import Footer from '@/app/Footer';
import { ProductType } from '@/type/ProductType';
import productData from '@/data/Product.json';

const ProductDefault = () => {
	const searchParams = useSearchParams();
	let productId = searchParams.get('id');

	if (productId === null) {
		productId = '1';
	}

	return (
		<>
			
			<div id="header" className="relative w-full">
				<MenuOne props="bg-white" />
				<BreadcrumbProduct
					data={productData}
					productPage="default"
					productId={productId}
				/>
			</div>
			<Default data={productData} productId={productId} />
			<Footer />
		</>
	);
};

export default ProductDefault;
