from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in multi_items_select/__init__.py
from multi_items_select import __version__ as version

setup(
	name="multi_items_select",
	version=version,
	description="custom multi items insert for Sales Order items table",
	author="Ebkar",
	author_email="igentle.appletec@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
